import React from "react";
import style from "./CloudSend.module.css";

const CloudSend = props => {
  return (
    <div className={style.item}>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Send</button>
    </div>
  );
};

export default CloudSend;
