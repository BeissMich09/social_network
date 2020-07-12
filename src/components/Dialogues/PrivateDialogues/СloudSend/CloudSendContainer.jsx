import React from "react";
import { sendMessageActionCreator } from "../../../../Redux/dialogues_reducer";
import CloudSend from "./CloudSendForm";
import { connect } from "react-redux";

const CloudSendContainer = (props) => {
  let newMessage = (values) => {
    props.sendMessage(values.newMessage);
  };
  return <CloudSend onSubmit={newMessage} />;
};

let mapNewMessageText = (state) => {
  return {
    newMessageText: state.dialoguesPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessage) => {
      dispatch(sendMessageActionCreator(newMessage));
    },
  };
};

export default connect(mapNewMessageText, mapDispatchToProps)(CloudSendContainer);
