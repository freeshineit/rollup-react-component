import { type Options } from '../TimeAxis';
import { defaultOptions } from '../constant';

/**
 * @description 合并配置项
 * @param {Options} options
 * @returns {Required<Omit<Options, "container">>}
 */
export const mergeOptions = (options: Options) => {
  return Object.assign(options, defaultOptions);
};
