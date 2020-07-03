import React from "react";
import style from "./CloudSend.module.css";
import { Field, reduxForm } from "redux-form";

const CloudSend = (props) => {
  let newMessageText = props.newMessageText;

  return (
    <form onSubmit={props.handleSubmit} className={style.item}>
      <Field
        name="newMessage"
        component="textarea"
        value={newMessageText}
        placeholder="Введите ваше сообщение"
      ></Field>
      <button>Send</button>
    </form>
  );
};
export default reduxForm({ form: "message" })(CloudSend);
