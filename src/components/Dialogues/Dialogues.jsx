import React from "react";
import style from "./Dialogues.module.css";
import PersonDialogue from "./PersonDialogue/PersonDialogue";
import PrivateDialogues from "./PrivateDialogues/PrivateDialogues";
import { Redirect } from "react-router-dom";

const Dialogues = (props) => {
  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }
  const { userArr, messageArr } = props.dialoguesPage;
  return (
    <div className={style.dialogues_content}>
      <PersonDialogue userArr={userArr} />
      <PrivateDialogues messageArr={messageArr} />
    </div>
  );
};

export default Dialogues;
