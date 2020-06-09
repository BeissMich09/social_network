import React from "react";
import style from "./Dialogues.module.css";
import PersonDialogue from "./PersonDialogue/PersonDialogue";
import PrivateDialogues from "./PrivateDialogues/PrivateDialogues";
import { Redirect } from "react-router-dom";
// import { connect } from "react-redux";

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

// let mapStateToProps = (state) => {
//   return {
//     dialoguesPage: state.dialoguesPage,
//     isAuth: state.auth.isAuth,
//   };
// };

// const DialoguesConnected = connect(mapStateToProps)(Dialogues);
export default Dialogues;
