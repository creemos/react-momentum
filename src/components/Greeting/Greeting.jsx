import { Formik, Form, Field } from "formik";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthActionCreators } from "../../redux/authReducer";
import "./Greeting.css";

export const Greeting = () => {
  let greetingText = "";
  let pathOfDay = new Date().getHours();

  if (pathOfDay < 7) {
    greetingText = "Доброй ночи";
  } else if (pathOfDay < 13) {
    greetingText = "Доброе утро";
  } else if (pathOfDay < 19) {
    greetingText = "Добрый день";
  } else {
    greetingText = "Добрый вечер";
  }

  const dispatch = useDispatch();
  let isAuth = useSelector((state) => state.auth.isAuth)
  const username = useSelector((state) => state.auth.username);

  const loginHandler = data => {
    dispatch(AuthActionCreators.login(data.username));
    localStorage.setItem("username", data.username)
  }
  const logoutHandler = () => {
    dispatch(AuthActionCreators.logout())
  }

  useEffect(() => {
    if (localStorage.getItem("username")) {
      dispatch(AuthActionCreators.login(localStorage.getItem("username")))
    }
  }, [localStorage.getItem("username")])

  return (
    <div className="greeting-container">
      {isAuth ? (
        <span className="greeting">
          {greetingText}, {username}! 
          <button className="greetingBtn" onClick={logoutHandler}>🚪</button>
        </span>
      ) : (
        <Formik
          initialValues={{
            username: "",
          }}
          onSubmit={(values) => loginHandler(values)}
        >
          <Form>
            <Field
              id="username"
              name="username"
              className="name"
              placeholder="[Введите имя]"
            />
            <button className="greetingBtn" type="submit">
              Вход
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
};
