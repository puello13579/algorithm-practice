function makeNumber(num) {
  let str = "-";
  let answer = "";
  for (let i = 1; i <= num; i++) {
    answer += i;
    if (i !== num) {
      answer += "-";
    }
  }
  return answer;
}

makeNumber(5);

//1부터 num값 까지의 숫자들을 문자열로 만들고 그 안에 -이 들어가게 되는 알고리즘
