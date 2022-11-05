import { useState } from "react";
import { Box } from "../../styles/emotion";
export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangePassword2(event) {
    setPassword2(event.target.value);
  }
  function onClickSignup(event) {
    console.log(email);
    console.log(password);
    console.log(password2);

    //이메일 안에 @있는지 데이터 검증//

    if (email.includes("@") === false && password !== password2) {
      //   alert("이메일이 올바르지 않습니다! @가 없음");
      //   document.getElementById("error").innerText =
      //     "이메일이 올바르지 않습니다! @가 없음";
      setEmailError("이메일이 올바르지 않습니다! @가 없음");
      setPasswordError("비밀번호가 일치하지 않습니다.");
    } else if (email === "" && password === "" && password2 === "") {
      //   alert("회원가입을 축하합니다");
      //메시지 알림 이전, Backend 컴퓨터에 있는 API 요청하기 //
      alert("회원정보를 입력해 주세요");
    } else {
      alert("회원가입을 축하합니다.");
      setEmailError("");
      setPasswordError("");
    }
  }
  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail}></input>
      <Box>{emailError}</Box>
      비밀번호:<input type="password" onChange={onChangePassword}></input>
      비밀번호확인:<input type="password" onChange={onChangePassword2}></input>
      <Box>{passwordError}</Box>
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
