import { CANVAS_DPR } from './constant';
import { drawLine, drawLineStyleDPR, drawText, drawTextStyleDPR } from './utils/draw';

class CurrentPoint {
  private readonly _currentOptions: any;
  private readonly _context: CanvasRenderingContext2D;
  constructor($canvas: HTMLCanvasElement, currentOptions: any) {
    //
    this._currentOptions = currentOptions;
    this._context = $canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  render(text: string, x: number) {
    // 绘制文本
    drawLine(
      this._context,
      x,
      this._currentOptions.height,
      drawLineStyleDPR(this._currentOptions.style),
    );
    // prettier-ignore
    drawText(this._context, text, (x - 9 * CANVAS_DPR), this._currentOptions.textOffset, drawTextStyleDPR(this._currentOptions.textStyle));
  }
}

export default CurrentPoint;
