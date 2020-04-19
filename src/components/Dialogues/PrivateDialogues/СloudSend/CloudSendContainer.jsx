import React from "react";
import {
  sendMessageActionCreator,
  newMessageTextChangeActionCreator,
} from "../../../../Redux/dialogues_reducer";
import CloudSend from "./CloudSend";

const CloudSendContainer = (props) => {
  let state = props.store.getState();

  let newMessageText = state.dialoguesPage.newMessageText;

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onChangeMessage = (e) => {
    let text = e.target.value;
    props.store.dispatch(newMessageTextChangeActionCreator(text));
  };

  return (
    <CloudSend
      newMessageText={newMessageText}
      onChangeMessage={onChangeMessage}
      sendMessage={sendMessage}
    />
  );
};

export default CloudSendContainer;
