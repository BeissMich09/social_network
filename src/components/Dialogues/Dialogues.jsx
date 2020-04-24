import React from "react";
import style from "./Dialogues.module.css";
import PersonDialogue from "./PersonDialogue/PersonDialogue";
import PrivateDialogues from "./PrivateDialogues/PrivateDialogues";
import { connect } from "react-redux";
const Dialogues = (props) => {
  const { userArr, messageArr } = props.dialoguesPage;
  return (
    <div className={style.dialogues_content}>
      <PersonDialogue userArr={userArr} />
      <PrivateDialogues messageArr={messageArr} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    dialoguesPage: state.dialoguesPage,
  };
};

const DialoguesConnected = connect(
  mapStateToProps
)(Dialogues);
export default DialoguesConnected;
