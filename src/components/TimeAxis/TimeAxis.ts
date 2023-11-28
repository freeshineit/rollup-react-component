import { CANVAS_DPR, type defaultOptions } from './constant';
import { mergeOptions } from './utils/mergeOptions';
import { secondsToHMS } from './utils/time';
import { timeToHMSs } from './utils/timeArray';
import { throttle } from 'lodash-es';

export type Options = Partial<typeof defaultOptions> & { container: string | HTMLElement };

class TimeAxis {
  $container: HTMLElement;
  private readonly _options: Required<Options>;
  private $canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D;

  // 创建 ResizeObserver 实例，并传入回调函数
  _resizeObserver: ResizeObserver;

  _timeHMSArray: string[] = [];

  _mouseX = 0;
  _mouseY = 0;

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
    if (!this.$canvas) {
      const $canvas = document.createElement('canvas');
      this.$canvas = $canvas;
      this._context = $canvas.getContext('2d') as CanvasRenderingContext2D;
      this.$container.appendChild(this.$canvas);
    }
    this._renderWH(this.$canvas);
    this._setTimeHMSArray();
    // draw canvas
    this.draw();
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

    // 绘制文本
    this._drawLine(x, this._options.cursor.height, this._LineStyleDPR(this._options.cursor.style));
    // prettier-ignore
    this._drawText(text, (x - 9 * CANVAS_DPR), this._options.cursor.textOffset, this._TextStyleDPR(this._options.cursor.textStyle));
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
    this._drawLine(
      centerPosition,
      this._options.height,
      this._LineStyleDPR(this._options.currentLineStyle),
    );
  }

  /**
   * @description 绘制时间刻度
   */
  _drawGraduation() {
    const { space, height, gap, gapHeight, style, gapStyle } = this._options.graduation;
    const canDrawPoint = Math.ceil(this.$canvas.width / space) + 1;

    const lineStyle = this._LineStyleDPR(style);
    const lineGapStyle = this._LineStyleDPR(gapStyle);

    for (let i = 0; i < canDrawPoint; i++) {
      const isGap = i % gap === 0;
      const h = isGap ? gapHeight : height;
      this._drawLine(space * i, h, isGap ? lineStyle : lineGapStyle);
    }

    this._drawGapTimeText();
  }

  /**
   * @description 绘制当前时间节点
   */
  _drawLine(x: number, height: number, style: Record<string, any>) {
    this._drawStyle(style);

    this._context.beginPath();
    this._context.moveTo(x * CANVAS_DPR, 0);
    this._context.lineTo(x * CANVAS_DPR, height * CANVAS_DPR); // 终点坐标
    this._context.stroke(); // 绘制线条
    this._context.closePath(); // 结束路径
  }

  /**
   * @description 绘制当前时间节点
   */
  _drawText(text: string, x: number, y: number, style: Record<string, any>) {
    this._drawStyle(style);
    this._context.fillText(text, x * CANVAS_DPR, y * CANVAS_DPR);
  }

  /**
   * @description 绘制当前时间节点
   */
  _drawGapTimeText() {
    const { gap, space, gapTextStyle, gapTextOffset } = this._options.graduation;
    const len = this._timeHMSArray.length;
    const style = this._TextStyleDPR(gapTextStyle);
    for (let i = 0; i <= len; ) {
      // prettier-ignore
      this._drawText(this._timeHMSArray[i], i * space * gap - 9 * CANVAS_DPR, gapTextOffset, style);
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

  /**
   * @description 绘制样式
   * @param style
   */
  _drawStyle(style: Record<string, any>) {
    for (const key in style) {
      (this._context as any)[key] = style[key];
    }
  }

  _LineStyleDPR(style: { lineWidth: number }) {
    return {
      ...style,
      lineWidth: style.lineWidth * CANVAS_DPR,
    };
  }

  _TextStyleDPR(style: { font: string }) {
    return {
      ...style,
      font: style.font.replace(/\s*(\d+)px/, (_: any, fontSize: string) => {
        const newSize = parseInt(fontSize) * CANVAS_DPR;
        return newSize + 'px';
      }),
    };
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
