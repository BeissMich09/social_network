import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="input" name="login" placeholder="Login" />
      </div>
      <div>
        <Field component="input" name="password" placeholder="Password" />
      </div>
      <div>
        <label>
          <Field component="input" name="rememberMe" type="checkbox" />
          remember me
        </label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
