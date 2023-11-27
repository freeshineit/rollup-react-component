function timeFmt(current: number) {
  const date = new Date(current * 1000);

  return '';
}

export function secondsToHMS(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // 将数字格式化为两位数的字符串
  function pad(number: number) {
    return ('0' + number).slice(-2);
  }

  const formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(remainingSeconds);
  return formattedTime;
}
