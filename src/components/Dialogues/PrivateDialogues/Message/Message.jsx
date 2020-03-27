import React from "react";
import style from "./Message.module.css";

const Message = props => {
  return (
    <div className={style.item}>
      <div className={style.name_photo}>
        <img src="https://redcdn.net/topicit/images/no-avatar-1.png" alt="" />
        <p>{props.name}</p>
      </div>
      <div className={style.message}>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Message;
