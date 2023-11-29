const lineStyle = {
  strokeStyle: '#FFF',
  lineWidth: 1,
};

const graduationStyle = {
  strokeStyle: '#FFF',
  lineWidth: 1,
};

const gapTextStyle = {
  font: '10px Microsoft YaHei',
  fillStyle: '#fff',
};

export const defaultOptions = {
  height: 48,
  cursor: {
    height: 12,
    style: lineStyle,
    textOffset: 34,
    textStyle: gapTextStyle,
  },
  // 刻度
  graduation: {
    second: 1, // 1s
    space: 5, // 10px
    height: 5, // 10px
    style: graduationStyle,
    gap: 10, // 10个 space
    gapHeight: 8, // 8px
    gapStyle: { ...graduationStyle, strokeStyle: '#0099e5' },
    gapTextStyle,
    gapTextOffset: 22,
  },
  currentLineStyle: lineStyle,
  current: Math.floor(new Date().getTime() / 1000),
};

/** dpr = 2 */
export const CANVAS_DPR = 2;
