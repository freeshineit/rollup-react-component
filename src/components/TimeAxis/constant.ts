const lineStyle = {
  strokeStyle: '#FFF',
  lineWidth: 1,
};

const graduationStyle = {
  strokeStyle: 'rgba(255,255,255,0.8)',
  lineWidth: 1,
};

const gapTextStyle = {
  font: '10px Microsoft YaHei',
  fillStyle: '#fff',
};

/** @type {*} */
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
    gap: 10, // 10个
    gapHeight: 8, // 10px
    gapStyle: graduationStyle,
    gapTextStyle,
    gapTextOffset: 22,
  },
  currentLineStyle: lineStyle,
  current: Math.floor(new Date().getTime() / 1000),
};

/** dpr = 2 */
export const CANVAS_DPR = 2;
