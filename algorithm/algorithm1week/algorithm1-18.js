function calculator(num1, num2, operator) {
  if (operator === "+") {
    console.log(num1 + num2);
  } else if (operator === "-") {
    console.log(num1 - num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
  } else if (operator === "/") {
    console.log(num1 / num2);
  } else {
    console.log("올바른 입력이 아닙니다.");
  }
}

calculator(1, 2, "+");
calculator(1, 2, "-");
calculator(1, 2, "/");
calculator(1, 2, "*");
calculator(1, 2, "a");
