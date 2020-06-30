const SEND_MESSAGE = "SEND-MESSAGE";
const NEW_MESSAGE_CHANGE = "NEW-MESSAGE-CHANGE";

let initialState = {
  userArr: [
    { id: 1, name: "Nastya" },
    { id: 2, name: "Sergey" },
    { id: 3, name: "Sanya" },
    { id: 4, name: "Fedos" },
    { id: 5, name: "Valera" },
  ],
  messageArr: [
    { id: 1, message: "Hi"},
    { id: 2, message: "How are you?"},
    { id: 3, message: "I'm fine"},
    { id: 4, message: "Go home"},
    { id: 5, message: "I go"},
  ],
  newMessageText: "",
};

const reducerDialogues = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newNewMessage = {
        id: 6,
        message: state.newMessageText,
      };
      return Object.assign({}, state, {
        messageArr: state.messageArr.concat(newNewMessage),
        newMessageText: "",
      });
    case NEW_MESSAGE_CHANGE:
      return Object.assign({}, state, { newMessageText: action.newText });
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
export default reducerDialogues;
