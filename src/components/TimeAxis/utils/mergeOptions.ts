import { type Options } from '../TimeAxis';
import { defaultOptions } from '../constant';
import { merge } from 'lodash-es';

/**
 * @description 合并配置项
 * @param {Options} options
 * @returns {Required<Omit<Options, "container">>}
 */
export const mergeOptions = (options: Options) => {
  return merge(options, defaultOptions);
};
