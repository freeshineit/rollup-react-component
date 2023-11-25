import { CANVAS_DPR } from './constant';
import { mergeOptions } from './utils/mergeOptions';
import { timeHMSArray } from './utils/timeArray';

export interface LineStyle {
  strokeStyle?: string | CanvasGradient | CanvasPattern;
  lineWidth?: number;
}

export interface Options {
  container: string | HTMLElement;
  height?: number;
  point?: {
    /**
     * 时间线
     * @default [1, 10, 10] //  [间隔秒(s), 间隔宽(px), 隔10个间隔画一个高位] 注意： 线的宽度不要大于 space[1]
     *
     */
    space?: number[]; // [间隔秒, 间隔宽, ]
  } & LineStyle;
  currentLineStyle?: LineStyle;
}

class TimeAxis {
  $container: HTMLElement;
  private readonly _options: Required<Options>;
  private $canvas: HTMLCanvasElement;
  private _context: CanvasRenderingContext2D;

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
    if (options) this.render();
  }

  render() {
    if (!this.$canvas) {
      const $canvas = document.createElement('canvas');
      this.$canvas = $canvas;
      this._context = $canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    this._renderWH(this.$canvas);
    this.registerEvent();

    this.$container.appendChild(this.$canvas);
    // draw canvas
    this.draw();
  }

  registerEvent() {
    // prettier-ignore
    this.$canvas.addEventListener('mousemove',(e: MouseEvent) => {
        const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
        let relativeX = e.clientX - rect.x;
        let relativeY = e.clientY - rect.y;
        relativeX = relativeX < 0 ? 0 : relativeX
        relativeY = relativeY < 0 ? 0 : relativeY
        console.log('relative position', relativeX, relativeY);
      },
      false,
    );

    // mouse leave
    // prettier-ignore
    this.$canvas.addEventListener('mouseleave', () => {}, false);
    this.$canvas.addEventListener('mouseup', () => {}, false);
    this.$canvas.addEventListener('mouseout', () => {}, false);
    // prettier-ignore
    this.$canvas.addEventListener('mousedown', () => {}, false);

    // this.$container.addEventListener('resize', () => {
    //   console.log('container resizes');
    //   this.render();
    // });
  }

  _renderWH($canvas: HTMLCanvasElement) {
    const $containerW = this.$container.clientWidth;
    $canvas.width = $containerW * CANVAS_DPR;
    $canvas.style.width = $containerW + 'px';
    $canvas.height = this._options.height * CANVAS_DPR;
    $canvas.style.height = this._options.height + 'px';
  }

  draw() {
    this._context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    // current time
    const currentLineWidth = this._options.currentLineStyle.lineWidth as number;
    const centerPosition = this.$canvas.width / 2 - currentLineWidth / 2;
    this._drawLine(centerPosition, this._options.height, this._options.currentLineStyle);
    // all time point
    this._drawTimePoint();
  }

  /**
   * @description 绘制时间点
   */
  _drawTimePoint() {
    // const allPointNum = 3600 / (this._options.point.space as number[])[1];
    const [, gapW, gap] = this._options.point.space as number[];
    const canDrawPoint = Math.ceil(this.$canvas.width / gapW) + 1;

    for (let i = 0; i < canDrawPoint; i++) {
      const h = i % gap === 0 ? 10 : 6;
      this._drawLine(gapW * i, h, this._options.point);
    }

    timeHMSArray(this._options.point.space as number[]);
  }

  /**
   * @description 绘制当前时间节点
   */
  _drawLine(x: number, height: number, lineStyle: LineStyle) {
    for (const key in lineStyle) {
      (this._context as any)[key] = (this._options.currentLineStyle as any)[key];
    }

    this._context.beginPath();
    this._context.moveTo(x, 0);
    this._context.lineTo(x, height * CANVAS_DPR); // 终点坐标
    this._context.stroke(); // 绘制线条
    this._context.closePath(); // 结束路径
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
