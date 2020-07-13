import React from "react";
import ReduxLoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import { login } from "../../Redux/auth-reducer";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email,  formData.password,  formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
