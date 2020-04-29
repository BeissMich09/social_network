import React from "react";
import style from "./PersonDialogue.module.css";
import DialogueItem from "./DialogueItem/DialogueItem";

const PersonDialogue = (props) => {
  let dialoguesElem = props.userArr.map(user => (
    <DialogueItem name={user.name} id={user.id} key = {user.id} />
  ));
  return <div className={style.dialogue_item}>{dialoguesElem}</div>;
};
export default PersonDialogue;
