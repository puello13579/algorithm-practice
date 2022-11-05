export default function randomNumber() {
  let random_numbers = (number) => {
    document.getElementById("numbers").innerText = String(
      Math.floor(Math.random() * 1000000)
    ).padStart(6, "0");
    // document.getElementById("numbers").style.color =
    //   "#" + String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  };
  return (
    <>
      <div id="numbers">000000</div>
      <button onClick={random_numbers}>인증번호전송</button>
    </>
  );
}
