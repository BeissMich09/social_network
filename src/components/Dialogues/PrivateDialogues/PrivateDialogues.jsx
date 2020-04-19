import React from "react";
import style from "./PrivateDialogues.module.css";
import Message from "./Message/Message";
import CloudSendContainer from "./СloudSend/CloudSendContainer";

const PrivateDialogues = (props) => {
  let state = props.store.getState();

  let messageElem = state.dialoguesPage.messageArr.map((message) => (
    <Message name={"Nastya"} message={message.message} />
  ));
  return (
    <div className={style.item}>
      <div className={style.messages}>{messageElem}</div>
      <CloudSendContainer store={props.store} />
    </div>
  );
};

export default PrivateDialogues;
