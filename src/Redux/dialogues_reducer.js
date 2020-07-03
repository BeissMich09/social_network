const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  userArr: [
    { id: 1, name: "Nastya" },
    { id: 2, name: "Sergey" },
    { id: 3, name: "Sanya" },
    { id: 4, name: "Fedos" },
    { id: 5, name: "Valera" },
  ],
  messageArr: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I'm fine" },
    { id: 4, message: "Go home" },
    { id: 5, message: "I go" },
  ],
};

const reducerDialogues = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newNewMessage = {
        id: 6,
        message: action.newMessage,
      };
      return Object.assign({}, state, {
        messageArr: state.messageArr.concat(newNewMessage),
      });
    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessage) => {
  return { type: SEND_MESSAGE, newMessage };
};

export default reducerDialogues;
