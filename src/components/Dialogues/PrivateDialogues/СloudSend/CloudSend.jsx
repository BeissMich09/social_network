import React from "react";
import style from "./CloudSend.module.css";

const CloudSend = (props) => {
  let newMessageText = props.newMessageText;

  let sendMessage = () => {
    props.sendMessage();
  };

  let onChangeMessage = (e) => {
    props.onChangeMessage(e);
  };

  return (
    <div className={style.item}>
      <textarea
        value={newMessageText}
        onChange={onChangeMessage}
        placeholder="Введите ваше сообщение"
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default CloudSend;
