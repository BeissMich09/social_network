import React from "react";
import {
  sendMessageActionCreator,
  newMessageTextChangeActionCreator,
} from "../../../../Redux/dialogues_reducer";
import CloudSend from "./CloudSend";
import StoreContext from "../../../../StoreContext";

const CloudSendContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let newMessageText = state.dialoguesPage.newMessageText;

        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        let onChangeMessage = (e) => {
          let text = e.target.value;
          store.dispatch(newMessageTextChangeActionCreator(text));
        };

        return (
          <CloudSend
            newMessageText={newMessageText}
            onChangeMessage={onChangeMessage}
            sendMessage={sendMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default CloudSendContainer;
