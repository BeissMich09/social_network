import React from "react";
import style from "./PrivateDialogues.module.css";
import Message from "./Message/Message";
import CloudSendContainer from "./СloudSend/CloudSendContainer";

const PrivateDialogues = (props) => {

  let messageElem = props.messageArr.map((message) => (
    <Message name={"Nastya"} message={message.message} id = {message.id} key = {message.id} />
  ));
  return (
    <div className={style.item}>
      <div className={style.messages}>{messageElem}</div>
      <CloudSendContainer />
    </div>
  );
};

export default PrivateDialogues;
