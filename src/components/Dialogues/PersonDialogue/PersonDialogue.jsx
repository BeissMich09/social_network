import React from "react";
import style from "./PersonDialogue.module.css";

const PersonDialogue = (props) => {
  return (
    <div className={style.item}>
      <p>Person1</p>
      <p>Person2</p>
      <p>Person3</p>
      <p>Person4</p>
    </div>
  );
};

export default PersonDialogue;
