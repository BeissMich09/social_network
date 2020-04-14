import React from "react";
import style from "./CloudSend.module.css";
import {
  sendMessageActionCreator,
  newMessageTextChangeActionCreator,
} from "../../../../Redux/state";

const CloudSend = (props) => {
  let state = props.store.getState().dialoguesPage;

  let newMessageText = state.newMessageText;

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onChangeMessage = (e) => {
    let text = e.target.value;
    props.dispatch(newMessageTextChangeActionCreator(text));
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
