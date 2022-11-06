function countLetter(str) {
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      answer++;
    }
  }
  return answer;
}

countLetter("aaaA");

//++는 1씩 증가하라는 뜻이다.
//대문자 A와 소문자 a의 갯수만큼 증가하는 로직
