import React from "react";
import style from "./CloudSend.module.css";

const CloudSend = props => {
  let newMessageElement = React.createRef();
  let sendMessage = () => {
    let text = newMessageElement.current.value;
    console.log("cloud", text);
    if (text.trim() === "") {
      newMessageElement.current.value = "";
    } else if (text !== "") {
      props.sendMessage(text);
      newMessageElement.current.value = "";
    }
  };
  let onChangeMessage = () => {
    let text = newMessageElement.current.value;
    props.newMessageTextChange(text);
  };
  return (
    <div className={style.item}>
      <textarea
        ref={newMessageElement}
        onChange={onChangeMessage}
        placeholder="Введите ваше сообщение"
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default CloudSend;
