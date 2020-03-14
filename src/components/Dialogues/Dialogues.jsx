import React from "react";
import style from "./Dialogues.module.css";
import PersonDialogue from "./PersonDialogue/PersonDialogue";
import PriviteDialogues from "./PriviteDialogues/PriviteDialogues";

const Dialogues = (props) => {
  return (
    <div className={style.dialogues}>
      <h1>Dialogues</h1>
      <div className={style.dialogues_content}>
        <PersonDialogue />
        <PriviteDialogues />
      </div>
    </div>
  );
};

export default Dialogues;
