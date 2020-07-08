import React from "react";
import style from "./CloudSend.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControls";
import {
  requiredField,
  maxLengthCretor,
} from "../../../../utils/validators/validators";

const maxLength100 = maxLengthCretor(100);

const CloudSend = (props) => {
  let newMessageText = props.newMessageText;

  return (
    <form onSubmit={props.handleSubmit} className={style.item}>
      <Field
        name="newMessage"
        validate={[requiredField, maxLength100]}
        component={Textarea}
        value={newMessageText}
        placeholder="Введите ваше сообщение"
      ></Field>
      <button>Send</button>
    </form>
  );
};
export default reduxForm({ form: "message" })(CloudSend);
