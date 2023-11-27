import { secondsToHMS } from './time';

export const timeToHMSs = (second: number, gap: number) => {
  const arr = [];
  for (let i = 0; i < 3600 * 24; ) {
    arr.push(secondsToHMS(i));
    i = i + second * gap;
  }
  return arr;
};
