import React from "react";
import style from "./Friend.module.css";

const Friend = props => {
  return (
    <div className={style.item}>
      <img src="https://redcdn.net/topicit/images/no-avatar-1.png" alt=""/>
      <p>{props.name}</p>
    </div>
  );
};

export default Friend;
