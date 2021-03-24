import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../Redux/auth-reducer";
import React from "react";

const LoginContainer = ({ isAuth, login, captchaUrl }) => {
  return <Login captchaUrl={captchaUrl} isAuth={isAuth} login={login} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl, 
});

export default connect(mapStateToProps, { login })(LoginContainer);
