import React from "react";
import style from "./PersonDialogue.module.css";
import DialogueItem from "./DialogueItem/DialogueItem";

let userArr = [
  { id: 1, name: "Nastya" },
  { id: 2, name: "Sergey" },
  { id: 3, name: "Sanya" },
  { id: 4, name: "Fedos" },
  { id: 5, name: "Valera" }
];

let dialoguesElem = userArr.map(user => (
  <DialogueItem name={user.name} id={user.id} />
));

const PersonDialogue = props => {
  console.log(props.path);
  return <div className={style.dialogue_item}>{dialoguesElem}</div>;
};

export default PersonDialogue;
