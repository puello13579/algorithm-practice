function sum(num) {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    console.log(i);
    answer += i;
    //answer +=는 answer = answer + i를 축약한 것임
    // 0 + 1,2,3,4,5 가 되는 것임
  }
  return answer;
}

sum(2);

//매개변수에 들어온 인자의 숫자값부터 1까지를 더해주는 함수
