import React from "react";
import style from "./PersonDialogue.module.css";
import DialogueItem from "./DialogueItem/DialogueItem";

let UserArr = [
  { id: 1, name: "Nastya" },
  { id: 2, name: "Sergey" },
  { id: 3, name: "Sanya" },
  { id: 4, name: "Fedos" },
  { id: 5, name: "Valera" }
];

const PersonDialogue = props => {
  console.log(props.path);
  return (
    <div className={style.dialogue_item}>
      <DialogueItem name={UserArr[0].name} id={UserArr[0].id} />
      <DialogueItem name={UserArr[1].name} id={UserArr[1].id} />
      <DialogueItem name={UserArr[2].name} id={UserArr[2].id} />
      <DialogueItem name={UserArr[3].name} id={UserArr[3].id} />
      <DialogueItem name={UserArr[4].name} id={UserArr[4].id} />
    </div>
  );
};

export default PersonDialogue;
