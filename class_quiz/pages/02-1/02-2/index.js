import { useState } from "react";

export default function quiz1_1() {
  const [text, setText] = useState("안녕하세요");
  function changeButton() {
    setText("반갑습니다.");
  }
  return (
    <>
      <button id="button" onClick={changeButton}>
        {text}
      </button>
    </>
  );
}
