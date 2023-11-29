import { CANVAS_DPR } from './constant';

export interface IBlock {
  length: number;
  x: number;
}

export interface BlockOptions {
  color: string;
  height: number;
  y: number;
}

class Block {
  private readonly _options: BlockOptions;
  private readonly _context: CanvasRenderingContext2D;

  constructor($canvas: HTMLCanvasElement, options: any) {
    this._options = options;
    this._context = $canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  render(block: IBlock[]) {
    console.log('render ....', this._context);
    // 设置矩形样式
    this._context.fillStyle = '#3498db'; // 填充色

    // 绘制圆角矩形
    this.drawRoundedRect(50, 60, 200, 30, 2);
  }

  // 辅助函数，绘制圆角矩形
  drawRoundedRect(x: number, y: number, width: number, height: number, radius: number) {
    this._context.beginPath();
    this._context.moveTo(x + radius, y);
    this._context.arcTo(x + width, y, x + width, y + height, radius);
    this._context.arcTo(x + width, y + height, x, y + height, radius);
    this._context.arcTo(x, y + height, x, y, radius);
    this._context.arcTo(x, y, x + width, y, radius);
    this._context.closePath();
    // 填充
    this._context.fill();
  }
}

export default Block;
