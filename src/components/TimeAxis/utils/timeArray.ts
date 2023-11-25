export const timeHMSArray = (space: number[]) => {
  const [second, _, gap] = space;

  const arr = [];

  for (let i = 0; i < 3600 * 24; ) {
    arr.push(secondsToHMS(i));
    console.log(i);
    i = i + second * gap;
  }
  console.log(arr);
};

function secondsToHMS(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // 将数字格式化为两位数的字符串
  function pad(number: number) {
    return number < 10 ? '0' + number : number;
  }

  const formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(remainingSeconds);
  return formattedTime;
}
