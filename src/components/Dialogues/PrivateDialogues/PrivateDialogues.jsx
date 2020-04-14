import React from "react";
import style from "./PrivateDialogues.module.css";
import Message from "./Message/Message";
import CloudSend from "./СloudSend/CloudSend";

const PrivateDialogues = props => {
  let messageElem = props.messageArr.map(message => (
    <Message name={"Nastya"} message={message.message} />
  ));
  return (
    <div className={style.item}>
      <div className = {style.messages}>{messageElem}</div>
      <CloudSend
        dispatch={props.dispatch}
        store={props.store}
      />
    </div>
  );
};

export default PrivateDialogues;
