import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../Redux/auth-reducer";
import React from "react";

const LoginContainer = ({ isAuth, login }) => {
  return <Login isAuth={isAuth} login={login} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(LoginContainer);
