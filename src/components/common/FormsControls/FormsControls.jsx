import React from "react";
import { Field } from "redux-form";
import style from "./FormsControls.module.css";

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const showError = touched && error;
  return (
    <div className={style.formControl + " " + (showError ? style.error : "")}>
      <div>{children}</div>
      {showError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props
) => {
  return (
    <div>
      <Field
        component={component}
        validate={validators}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
