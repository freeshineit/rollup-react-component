const lineStyle = {
  strokeStyle: '#FFF',
  lineWidth: 2,
};

const graduationStyle = {
  strokeStyle: 'rgba(255,255,255,0.8)',
  lineWidth: 2,
};

const gapTextStyle = {
  font: '20px',
  fillStyle: '#fff',
};

/** @type {*} */
export const defaultOptions = {
  height: 48,
  cursor: {
    height: 20,
    style: lineStyle,
    textOffset: 30,
    textStyle: gapTextStyle,
  },
  // 刻度
  graduation: {
    second: 1, // 1s
    space: 10, // 10px
    height: 6, // 10px
    style: graduationStyle,
    gap: 10, // 10个
    gapHeight: 10, // 10px
    gapStyle: graduationStyle,
    gapTextStyle,
  },
  currentLineStyle: lineStyle,
  current: Math.floor(new Date().getTime() / 1000),
};

/** dpr = 2 */
export const CANVAS_DPR = 2;
