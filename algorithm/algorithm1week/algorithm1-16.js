function temperature(num) {
  if (num <= 18) {
    console.log("조금 춥네요.");
  } else if (num >= 19 && num <= 23) {
    console.log("날씨가 좋네요");
  } else {
    console.log("조급 덥습니다.");
  }
}

temperature(1);
temperature(23);
temperature(26);
