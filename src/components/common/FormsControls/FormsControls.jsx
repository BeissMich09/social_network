import React from "react";
import style from "./FormsControls.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const showError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (showError ? style.error : "")}>
      <div>{props.children}</div>
      {showError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
