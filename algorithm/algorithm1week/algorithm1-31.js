function makeOdd(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      str += i;
    }
  }
  return str;
}

makeOdd(5);

//1부터 num까지의 숫자중 홀수값만 스트링으로 반환하는 문자열
