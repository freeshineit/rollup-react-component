import { type Options } from './TimeAxis';

const lineStyle = {
  strokeStyle: '#FFF',
  lineWidth: 3,
};

export const defaultOptions: Required<Omit<Options, 'container'>> = {
  height: 48,
  point: {
    ...lineStyle,
    space: [1, 10, 10], // [1s, 10px, 10个间隔]  注意： 线的宽度不要大于 space[1]
  },
  currentLineStyle: lineStyle,
};

/** dpr = 2 */
export const CANVAS_DPR = 2;
