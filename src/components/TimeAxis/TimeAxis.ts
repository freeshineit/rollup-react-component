import { CANVAS_DPR, type defaultOptions } from './constant';
import { mergeOptions } from './utils/mergeOptions';
import { secondsToHMS } from './utils/time';
import { timeToHMSs } from './utils/timeArray';
import { throttle } from 'lodash-es';
import { drawLine, drawText, drawTextStyleDPR, drawLineStyleDPR } from './utils/draw';
import CursorPoint from './CursorPoint';
import Block from './Block';

export type Options = Partial<typeof defaultOptions> & { container: string | HTMLElement };

class TimeAxis {
  $container: HTMLElement;
  private readonly _options: Required<Options>;
  private readonly $canvas: HTMLCanvasElement;
  private readonly _context: CanvasRenderingContext2D;

  // 创建 ResizeObserver 实例，并传入回调函数
  _resizeObserver: ResizeObserver;

  _timeHMSArray: string[] = [];

  _mouseX = 0;
  _mouseY = 0;

  _cursorPoint;
  _block;

  constructor(options: Options) {
    if (typeof options.container === 'string') {
      this.$container = document.getElementById(options.container) as HTMLElement;
    } else {
      this.$container = options.container;
    }
    if (!this.$container) {
      throw new Error('container is required!');
    }
    this._options = mergeOptions(options); // Object.assign({}, defaultOptions, );

    if (!this.$canvas) {
      const $canvas = document.createElement('canvas');
      this.$canvas = $canvas;
      this._context = $canvas.getContext('2d') as CanvasRenderingContext2D;
      this.$container.appendChild(this.$canvas);
    }
    this._cursorPoint = new CursorPoint(this.$canvas, this._options.cursor);
    this._block = new Block(this.$canvas, this._options.cursor);

    this._resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === this.$container) {
          throttle(() => this.render(), 50)();
        }
      }
    });

    this.render();
    this._registerEvent();
  }

  render() {
    this._renderWH(this.$canvas);
    this._setTimeHMSArray();
    // draw canvas
    this.draw();
    this._block.render([]);
  }

  _onMousemove(e: MouseEvent) {
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    const relativeX = e.clientX - rect.x;
    const relativeY = e.clientY - rect.y;
    this._mouseX = relativeX < 0 ? 0 : relativeX;
    this._mouseY = relativeY < 0 ? 0 : relativeY;

    this.draw();
    this._drawCursor(relativeX);
    this._drawCurrentPoint();
  }

  _onMouseOut() {
    console.log('_onMouseOut');
    this.draw();
  }

  _clearCanvas() {
    this._context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  _registerEvent() {
    console.log('registerEvent');
    // prettier-ignore
    this.$canvas.addEventListener('mousemove', throttle((event) =>this._onMousemove(event), 50), false);

    // mouse leave
    // prettier-ignore
    this.$canvas.addEventListener('mouseup', () => {}, false);
    // prettier-ignore
    this.$canvas.addEventListener('mouseleave', throttle(() =>this._onMouseOut(), 80), false);

    // prettier-ignore
    this.$canvas.addEventListener('mouseout', throttle(() => this._onMouseOut(), 80),false);
    // prettier-ignore
    this.$canvas.addEventListener('mousedown', () => {}, false);

    // div resize
    this._resizeObserver.observe(this.$container);
  }

  _renderWH($canvas: HTMLCanvasElement) {
    const $containerW = this.$container.clientWidth;
    $canvas.width = $containerW * CANVAS_DPR;
    $canvas.style.width = $containerW + 'px';
    $canvas.height = this._options.height * CANVAS_DPR;
    $canvas.style.height = this._options.height + 'px';
  }

  /**
   * @description 绘制鼠标焦点
   * @param {number} x 鼠标x轴位置 （没有dpr）
   */
  _drawCursor(x: number) {
    const { style, second, space } = this._options.graduation;
    // 计算鼠标所在位置的时间刻度
    const text = secondsToHMS(Math.floor(((x + style.lineWidth / 2) / space) * second));

    this._cursorPoint.render(text, x);
  }

  draw() {
    // clear canvas
    this._clearCanvas();
    // all time point
    this._drawGraduation();
    // current time
    this._drawCurrentPoint();
  }

  _drawCurrentPoint() {
    const currentLineWidth = this._options.currentLineStyle.lineWidth;
    const centerPosition = this.$canvas.width / 2 / CANVAS_DPR - currentLineWidth / 2;
    drawLine(
      this._context,
      centerPosition,
      this._options.height,
      drawLineStyleDPR(this._options.currentLineStyle),
    );
  }

  /**
   * @description 绘制时间刻度
   */
  _drawGraduation() {
    const { space, height, gap, gapHeight, style, gapStyle } = this._options.graduation;
    const canDrawPoint = Math.ceil(this.$canvas.width / space) + 1;

    const lineStyle = drawLineStyleDPR(style);
    const lineGapStyle = drawLineStyleDPR(gapStyle);

    for (let i = 0; i < canDrawPoint; i++) {
      const isGap = i % gap === 0;
      const h = isGap ? gapHeight : height;
      drawLine(this._context, space * i, h, isGap ? lineGapStyle : lineStyle);
    }

    this._drawGapTimeText();
  }

  /**
   * @description 绘制当前时间节点
   */
  _drawGapTimeText() {
    const { gap, space, gapTextStyle, gapTextOffset } = this._options.graduation;
    const len = this._timeHMSArray.length;
    const style = drawTextStyleDPR(gapTextStyle);
    for (let i = 0; i <= len; ) {
      // prettier-ignore
      drawText(this._context, this._timeHMSArray[i], i * space * gap , gapTextOffset, style);
      i++;
    }
  }

  /**
   * @description 设置所有时刻点
   */
  _setTimeHMSArray() {
    const { second, gap } = this._options.graduation;
    this._timeHMSArray = timeToHMSs(second, gap);
  }

  destroy() {
    this._resizeObserver.unobserve(this.$container);
  }

  /**
   * @description 获取配置
   * @returns {Required<Options>}
   */
  getOptions() {
    return this._options;
  }
}

export default TimeAxis;
