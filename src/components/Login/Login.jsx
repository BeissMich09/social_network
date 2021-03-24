import React from "react";
import ReduxLoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import style from "./Login.module.css";

const Login = ({ login, isAuth, captchaUrl }) => {
  console.log(captchaUrl);
  const onSubmit = (formData) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={style.item}>
      <div className={style.form}>
        <h3>Login</h3>
        <ReduxLoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
