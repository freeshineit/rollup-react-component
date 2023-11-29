import { CANVAS_DPR } from '../constant';

/**
 * @description 绘制当前时间节点
 */
export function drawLine(
  context: CanvasRenderingContext2D,
  x: number,
  height: number,
  style: Record<string, any>,
) {
  drawStyle(context, style);
  context.beginPath();
  context.moveTo(x * CANVAS_DPR, 0);
  context.lineTo(x * CANVAS_DPR, height * CANVAS_DPR); // 终点坐标
  context.stroke(); // 绘制线条
  context.closePath(); // 结束路径
}

/**
 * @description 绘制当前时间节点
 */
// prettier-ignore
export function drawText(context: CanvasRenderingContext2D,text: string, x: number, y: number, style: Record<string, any>) {
  drawStyle(context, style);
  context.fillText(text, (x - 9 * CANVAS_DPR) * CANVAS_DPR, y * CANVAS_DPR); // 9 代表文字的宽的一半
}

/**
 * @description 绘制样式
 * @param style
 */
export function drawStyle(context: CanvasRenderingContext2D, style: Record<string, any>) {
  for (const key in style) {
    (context as any)[key] = style[key];
  }
}

export function drawLineStyleDPR(style: { lineWidth: number }) {
  return {
    ...style,
    lineWidth: style.lineWidth * CANVAS_DPR,
  };
}

export function drawTextStyleDPR(style: { font: string }) {
  return {
    ...style,
    font: style.font.replace(/\s*(\d+)px/, (_: any, fontSize: string) => {
      const newSize = parseInt(fontSize) * CANVAS_DPR;
      return newSize + 'px';
    }),
  };
}
