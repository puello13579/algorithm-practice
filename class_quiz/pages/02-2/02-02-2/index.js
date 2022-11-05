import { useState } from "react";

//1. 0이라는 숫자와 "카운트올리기"라는 버튼을 만들고, 버튼 클릭시 숫자를 1씩 증가해 주세요.
// 1-1) let과 document.getElementById()를 사용해 주세요.
// 1-2) state를 사용해 주세요.

export default function counter_1() {
  const [count, setCount] = useState(0);
  function counterUp() {
    setCount(count + 1);
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={counterUp}>카운트올리기</button>
    </>
  );
}
