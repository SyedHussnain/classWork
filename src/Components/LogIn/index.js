import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Login(props) {
  let navigate = useNavigate();
  let userName = useRef();
  let userPassword = useRef();
  function loginUser(evt) {
    evt.preventDefault();
    props.users.map((item) => {
      if (
        item.name === userName.current.value &&
        item.password === userPassword.current.value
      ) {
        alert("Login Succesfull");
        navigate("/dashboard");
      } else {
        alert("Invalid UserName & Password");
      }
    });

    evt.target.reset();
  }
  return (
    <>
      <form action="" onSubmit={loginUser}>
        <input ref={userName} type="text" />
        <input ref={userPassword} type="password" name="" id="" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
