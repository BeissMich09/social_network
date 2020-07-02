import React from "react";
import {
  sendMessageActionCreator,
  newMessageTextChangeActionCreator,
} from "../../../../Redux/dialogues_reducer";
import CloudSend from "./CloudSend";
import { connect } from "react-redux";

const CloudSendContainer = (props) => {
  return <CloudSend onSubmit={newMessage} />;
};

let newMessage = (values) => {
  alert(values.newMessage);
};

let mapNewMessageText = (state) => {
  return {
    newMessageText: state.dialoguesPage.newMessageText,
  };
};
let mapStateToProps = (dispatch) => {
  return {
    onChangeMessage: (e) => {
      let text = e.target.value;
      dispatch(newMessageTextChangeActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export default connect(mapNewMessageText, mapStateToProps)(CloudSendContainer);
