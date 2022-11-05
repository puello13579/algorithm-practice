const str = "abcde";

for (let data in str) {
  console.log(data, str[data]);
}

//for in문은 문자열 데이터도 가능한데 이럴 경우 let 다음의 인자는 각 글자를 인덱스 값으로 저장되게 된다. 그리고 str[data]를 하게 되면 각 키에 배정된 인덱스의 값이 찍히게 된다.
