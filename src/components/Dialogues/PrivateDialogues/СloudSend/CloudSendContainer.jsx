import React from "react";
import {
  sendMessageActionCreator,
  newMessageTextChangeActionCreator,
} from "../../../../Redux/dialogues_reducer";
import CloudSend from "./CloudSend";
import {connect} from "react-redux";

// const CloudSendContainer = (props) => {ттусе
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let newMessageText = state.dialoguesPage.newMessageText;

//         let sendMessage = () => {
//           store.dispatch(sendMessageActionCreator());
//         };

//         let onChangeMessage = (e) => {
//           let text = e.target.value;
//           store.dispatch(newMessageTextChangeActionCreator(text));
//         };

//         return (
//           <CloudSend
//             newMessageText={newMessageText}
//             onChangeMessage={onChangeMessage}
//             sendMessage={sendMessage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

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

const CloudSendContainer = connect(
  mapNewMessageText,
  mapStateToProps
)(CloudSend);

export default CloudSendContainer;