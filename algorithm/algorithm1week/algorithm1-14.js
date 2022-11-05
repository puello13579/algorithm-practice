function boolean(input1, input2) {
  if (input1 === true || input2 === true) {
    console.log(true);
  } else if (input1 === false && input2 === false) {
    console.log(false);
  }
}

boolean(true, false);
boolean(true, false);
boolean(false, false);

//둘 중 하나라도 트루면 투루, 둘다 펄스면 펄스 라는 문구 띄우기
