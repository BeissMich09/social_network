import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import {
  requiredField,
  maxLengthCretor,
} from "../../utils/validators/validators";

const maxLength20 = maxLengthCretor(20);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          validate={[requiredField, maxLength20]}
          name="login"
          placeholder="Login"
        />
      </div>
      <div>
        <Field
          component={Input}
          validate={[requiredField]}
          name="password"
          placeholder="Password"
        />
      </div>
      <div>
        <label>
          <Field component={Input} name="rememberMe" type="checkbox" />
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
