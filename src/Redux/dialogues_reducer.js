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
    { id: 1, message: "Hi", name: "Nastya" },
    { id: 2, message: "How are you?", name: "Sergey" },
    { id: 3, message: "I'm fine", name: "Nastya" },
    { id: 4, message: "Go home", name: "Sergey" },
    { id: 5, message: "I go", name: "Nastya" },
  ],
  newMessageText: "",
};

const reduerDialogues = (state = initialState, action) => {
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
