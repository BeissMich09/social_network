import React from "react";
import { reduxForm, Field } from "redux-form";
import style from "./../common/FormsControls/FormsControls.module.css";
import { Input } from "../common/FormsControls/FormsControls";
import {
  requiredField,
  maxLengthCretor,
} from "../../utils/validators/validators";

const maxLength20 = maxLengthCretor(20);

const LoginForm = (props) => {
  return (
    <form className={style.form_item} onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          validate={[requiredField, maxLength20]}
          name="email"
          placeholder="Email"
        />
      </div>
      <div>
        <Field
          component={Input}
          validate={[requiredField]}
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
      <div className={style.remember}>
       <div className={style.remember2}> <label  htmlFor="rememberMe">remember me </label></div>
        <div>
          <Field
            id="rememberMe"
            component={Input}
            name="rememberMe"
            type="checkbox"
          />
        </div>
      </div>
      {props.error && (
        <div className={style.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
