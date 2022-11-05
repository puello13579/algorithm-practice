export default function quiz1_1() {
  function changeButton() {
    document.getElementById("button").innerText = "반갑습니다";
  }
  return (
    <>
      <button id="button" onClick={changeButton}>
        안녕하세요
      </button>
    </>
  );
}
