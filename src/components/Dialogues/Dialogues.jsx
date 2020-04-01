import React from "react";
import style from "./Dialogues.module.css";
import PersonDialogue from "./PersonDialogue/PersonDialogue";
import PrivateDialogues from "./PrivateDialogues/PrivateDialogues";

const Dialogues = props => {
  return (
    <div className={style.dialogues}>
      <h1>Dialogues</h1>
      <div className={style.dialogues_content}>
        <PersonDialogue userArr={props.userArr} />
        <PrivateDialogues
          messageArr={props.messageArr}
          newMessageTextChange={props.newMessageTextChange}
          sendMessage={props.sendMessage}
        />
      </div>
    </div>
  );
};

export default Dialogues;
