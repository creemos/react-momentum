import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Greeting.css";

export const Greeting = () => {
  let greetingText = "";
  let pathOfDay = new Date().getHours();

  if (pathOfDay < 7) {
    greetingText = "night";
  } else if (pathOfDay < 13) {
    greetingText = "morning";
  } else if (pathOfDay < 19) {
    greetingText = "evening";
  } else {
    greetingText = "night";
  }

  const dispatch = useDispatch();
  const fullName = useSelector((state) => state.auth.fullName);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [loginValue, setLoginValue] = useState('')

const submit = (e) => {
e.preventDefault()
console.log(loginValue)
}

  return (
    <div className="greeting-container">
      {isAuth ? (
        <span className="greeting">
          Good {greetingText}, {fullName}!
        </span>
      ) : (
        <form 
        className="loginForm"
        onSubmit={submit}>
          <input
            type="text"
            className="name"
            placeholder="[Enter your name]"
            value={loginValue}
            onChange={(e) => {setLoginValue(e.target.value)}}
          />
          <button className="loginBtn" type="submit">LogIn</button>
        </form>
      )}
    </div>
  );
};
