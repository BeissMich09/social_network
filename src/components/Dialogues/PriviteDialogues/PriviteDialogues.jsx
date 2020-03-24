import React from "react";
import style from "./PriviteDialogues.module.css";
import Message from "./Message/Message";


const PriviteDialogues = props => {
  let messageElem = props.messageArr.map(message => (
    <Message name={"Nastya"} message={message.message} />
  ));
  return (
    <div className={style.item}>
    {messageElem}
    </div>
  );
};

export default PriviteDialogues;
