function bigNum(str) {
  let biggest = 1;

  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) > biggest) {
      biggest = Number(str[i]);
    }
  }
  return biggest;
}

bigNum("4682");

//문자열로 들어온 숫자들 중에서 가장 큰 값을 숫자값으로 반환하는 함수
//biggest를 1로 놓으면 값과 비교해서 큰 값이 biggest에 재할당 되고 재할당 된 biggest와 str[i]를 다시 비교해서 더 크면 재할당 되고 크지 않으면 재할당 되지 않으므로 최종적으로 가장 큰 값이 재할당 되게 되는 원리이다.

//note: 가장 큰 값을 어떻게 설정할 것인가가 고민이었다. 가장 큰 값을 변수로 담는데 이게 동적으로 변하게 해주는게 핵심인것 같다.
