import React from "react";
import style from "./PriviteDialogues.module.css";
import Message from "./Message/Message";
// import {UserArr,PersonDialogue} from "./../PersonDialogue/PersonDialogue"


let MessageArr = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "I'm fine" },
  { id: 4, message: "Go home" },
  { id: 5, message: "I go" }
];

const PriviteDialogues = props => {
  return (
      <div className={style.item}>
        {/* <Message name={UserArr[0].name} message={MessageArr[1].message} /> */}
      </div>
  );
};

export default PriviteDialogues;
