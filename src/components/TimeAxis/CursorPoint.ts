import { drawLine, drawLineStyleDPR, drawText, drawTextStyleDPR } from './utils/draw';

class CursorPoint {
  private readonly _cursorOptions: any;
  private readonly _context: CanvasRenderingContext2D;
  constructor($canvas: HTMLCanvasElement, cursorOptions: any) {
    //
    this._cursorOptions = cursorOptions;
    this._context = $canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  render(text: string, x: number) {
    // 绘制文本
    drawLine(
      this._context,
      x,
      this._cursorOptions.height,
      drawLineStyleDPR(this._cursorOptions.style),
    );
    // prettier-ignore
    drawText(this._context, text, x, this._cursorOptions.textOffset, drawTextStyleDPR(this._cursorOptions.textStyle));
  }
}

export default CursorPoint;
