import React from "react";
import ReduxLoginForm from "./LoginForm";
// import { connect } from "react-redux";
// import { login } from "../../Redux/auth-reducer";

const Login = (props) => {
  console.log("Login", props);
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
