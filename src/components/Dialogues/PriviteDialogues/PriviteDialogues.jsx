import React from "react";
import style from "./PriviteDialogues.module.css";
import Message from "./Message/Message";

const PriviteDialogues = props => {
  return (
      <div className={style.item}>
        <Message name="Nastya" message="Хорошо" />
      </div>
  );
};

export default PriviteDialogues;
