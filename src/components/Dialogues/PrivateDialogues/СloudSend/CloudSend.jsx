import React from "react";
import style from "./CloudSend.module.css";

const CloudSend = props => {
  let newMessageElement = React.createRef();
  let sendMessage = () => {
    let text = newMessageElement.current.value;
    console.log("cloud", text);
    if (text === " ") {
      text = "";
    } else if (text !== "") {
      alert(text);
      text = "";
    }
  };

  return (
    <div className={style.item}>
      <textarea ref={newMessageElement} name="" id=""></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default CloudSend;
