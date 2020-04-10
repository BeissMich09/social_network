import React from "react";
import style from "./CloudSend.module.css";
import { sendMessageActionCreator, newMessageTextChangeActionCreator } from "../../../../Redux/state";

const CloudSend = props => {
  let newMessageElement = React.createRef();
  let sendMessage = () => {
    let text = newMessageElement.current.value;
    console.log("cloud", text);
    if (text.trim() === "") {
      newMessageElement.current.value = "";
    } else if (text !== "") {
      props.dispatch(sendMessageActionCreator());
      newMessageElement.current.value = "";
    }
  };
  let onChangeMessage = () => {
    let text = newMessageElement.current.value;
    props.dispatch(newMessageTextChangeActionCreator(text));
  };
  return (
    <div className={style.item}>
      <textarea
        ref={newMessageElement}
        onChange={onChangeMessage}
        placeholder="Введите ваше сообщение"
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default CloudSend;
