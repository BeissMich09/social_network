import React from "react";
import { reduxForm } from "redux-form";
import style from "./../common/FormsControls/FormsControls.module.css";
import { createField, Input } from "../common/FormsControls/FormsControls";
import {
  requiredField,
  maxLengthCretor,
} from "../../utils/validators/validators";

const maxLength20 = maxLengthCretor(20);

const LoginForm = (props) => {
  return (
    <form className={style.form_item} onSubmit={props.handleSubmit}>
      {createField("Email", "email", [requiredField, maxLength20], Input)}
      {createField("Password", "password", [requiredField], Input, {
        type: "password",
      })}

      <div className={style.remember}>
        <div className={style.rememberLable}>
          <label htmlFor="rememberMe">remember me </label>
        </div>

        <div className={style.checkbox}>
          {createField(
            null,
            "rememberMe",
            null,
            Input,
            { type: "checkbox" },
            { id: "rememberMe" }
          )}
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
