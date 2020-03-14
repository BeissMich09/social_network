import React from "react";
import style from "./PriviteDialogues.module.css";
import Message from "./Message/Message";

const PriviteDialogues = (props) => {
  return (
    <div className={style.item}>
      <Message name="Nastya" message="Когда домой?"/>
      <Message name="Fedos" message="Бухать?"/>
      <Message name="Тоха" message="Я пидор"/>
      <Message name="Саня" message="Я купил беху"/>
      <Message name="Игорь" message="Пойдём в лолец?"/>
    </div>
  );
};

export default PriviteDialogues;
