import { useState } from "react";

export default function randomNumber() {
  const [numbers, setNumbers] = useState("000000");
  let random_numbers = (number) => {
    setNumbers(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
    // document.getElementById("numbers").style.color =
    //   "#" + String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  };
  return (
    <>
      <div id="numbers">{numbers}</div>
      <button onClick={random_numbers}>인증번호전송</button>
    </>
  );
}
