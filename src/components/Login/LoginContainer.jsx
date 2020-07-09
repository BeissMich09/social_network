import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../Redux/auth-reducer";
import React from "react";

const LoginContainer = (props) => {
  return <Login login={props.login} />;
};

export default connect(null, { login })(LoginContainer);
