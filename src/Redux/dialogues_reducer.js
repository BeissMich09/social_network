const SEND_MESSAGE = "SEND-MESSAGE";
const NEW_MESSAGE_CHANGE = "NEW-MESSAGE-CHANGE";

const reduerDialogues = (state, action) => {
  if (action.type === SEND_MESSAGE) {
    let newMessage = state.newMessageText;
    state.messageArr.push({ id: 6, message: newMessage });
    state.newMessageText = "";
  } else if (action.type === NEW_MESSAGE_CHANGE) {
    state.newMessageText = action.newText;
  }

  return state;
};


export default reduerDialogues;