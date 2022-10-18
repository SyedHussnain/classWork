import { useRef } from "react";
function SignUp(props) {
  let userName = useRef();
  let userPassword = useRef();
  function createUser(evt) {
    evt.preventDefault();
    let newUser = {
      name: userName.current.value,
      password: userPassword.current.value,
    };
    props.users.push(newUser);
    props.setUsers([...props.users]);
    evt.target.reset();
  }
  return (
    <>
      <form action="" onSubmit={createUser}>
        <input ref={userName} type="text" />
        <input ref={userPassword} type="password" name="" id="" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SignUp;
