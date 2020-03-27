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
      {messageElem}
      <CloudSend/>
    </div>
  );
};

export default PrivateDialogues;