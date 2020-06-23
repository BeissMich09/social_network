import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = () => {
  return (
    <form>
      <div>
        <Field component={"input"} placeholder="Login" />
      </div>
      <div>
        <Field component={"input"} placeholder="Password" />
      </div>
      <div>
        <label>
          <Field component={"input"} type="checkbox" />
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
