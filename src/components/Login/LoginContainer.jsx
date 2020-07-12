import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../Redux/auth-reducer";
import React from "react";

const LoginContainer = (props) => {
  return <Login isAuth={props.isAuth} login={props.login} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(LoginContainer);
