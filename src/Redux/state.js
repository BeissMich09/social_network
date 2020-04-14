const ADD_POST = "ADD-POST";
const NEW_POST_TEXT_CHANGE = "NEW-POST-TEXT-CHANGE";
const SEND_MESSAGE = "SEND-MESSAGE";
const NEW_MESSAGE_CHANGE = "NEW-MESSAGE-CHANGE";
let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you?", likes: 15 },
        { id: 2, message: "Love me", likes: 10 },
        { id: 3, message: "Я люблю Сережу", likes: 45 },
        { id: 4, message: "Я хочу найти работу", likes: 14 },
      ],
      newPostText: "",
    },
    dialoguesPage: {
      userArr: [
        { id: 1, name: "Nastya" },
        { id: 2, name: "Sergey" },
        { id: 3, name: "Sanya" },
        { id: 4, name: "Fedos" },
        { id: 5, name: "Valera" },
      ],
      messageArr: [
        { id: 1, message: "Hi" , name: "Nastya"},
        { id: 2, message: "How are you?" , name: "Sergey"},
        { id: 3, message: "I'm fine" , name: "Nastya"},
        { id: 4, message: "Go home", name: "Sergey" },
        { id: 5, message: "I go", name: "Nastya" },
      ],
      newMessageText: "",
    },
    friendPage: {
      arrayBest: [
        { id: 1, name: "Nastya" },
        { id: 2, name: "Sergey" },
        { id: 3, name: "Sanya" },
      ],
      allFriend: [
        { id: 1, name: "Nastya" },
        { id: 2, name: "Sergey" },
        { id: 3, name: "Sanya" },
        { id: 4, name: "Fedos" },
        { id: 5, name: "Valera" },
        { id: 6, name: "Marina" },
        { id: 7, name: "Vasya" },
        { id: 8, name: "Ira" },
        { id: 9, name: "Inna" },
        { id: 10, name: "Kirill" },
      ],
    },
   
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("Will be change");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === NEW_POST_TEXT_CHANGE) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = this._state.dialoguesPage.newMessageText;
      this._state.dialoguesPage.messageArr.push({id:6, message:newMessage});
      this._state.dialoguesPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === NEW_MESSAGE_CHANGE) {
      this._state.dialoguesPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const newPostTextChangeActionCreator = (text) => {
  return { type: NEW_POST_TEXT_CHANGE, newText: text };
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

export default store;
window.state = store;
