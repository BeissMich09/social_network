const SEND_MESSAGE = "SEND-MESSAGE";
const NEW_MESSAGE_CHANGE = "NEW-MESSAGE-CHANGE";

const reduerDialogues = (state = {}, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = state.newMessageText;
      state.messageArr.push({ id: 6, message: newMessage });
      state.newMessageText = "";
      return state;
    case NEW_MESSAGE_CHANGE:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return { type: SEND_MESSAGE };
};

export const newMessageTextChangeActionCreator = (text) => {
  return {
    type: NEW_MESSAGE_CHANGE,
    newText: text,
  };
};
export default reduerDialogues;
