import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    postData: [
      { id: 1, message: "Hi, how are you?", likes: 15 },
      { id: 2, message: "Love me", likes: 10 },
      { id: 3, message: "Я люблю Сережу", likes: 45 },
      { id: 4, message: "Я хочу найти работу", likes: 14 }
    ],
    newPostText:"",
  },
  dialoguesPage: {
    userArr: [
      { id: 1, name: "Nastya" },
      { id: 2, name: "Sergey" },
      { id: 3, name: "Sanya" },
      { id: 4, name: "Fedos" },
      { id: 5, name: "Valera" }
    ],
    messageArr: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "I'm fine" },
      { id: 4, message: "Go home" },
      { id: 5, message: "I go" }
    ]
  },
  friendPage: {
    arrayBest: [
      { id: 1, name: "Nastya" },
      { id: 2, name: "Sergey" },
      { id: 3, name: "Sanya" }
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
      { id: 10, name: "Kirill" }
    ]
  },
  newMessageText: "",
};
export let addPost = () => {
  let newPost = { id: 5, message: state.profilePage.newPostText, likes: 0 };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let newPostTextChange = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let sendMessage = () => {
  let newMessage = { id: 6, message: state.dialoguesPage.newMessageText };
  state.dialoguesPage.messageArr.push(newMessage);
  state.dialoguesPage.newPostText = "";
  rerenderEntireTree(state);
};

export let newMessageTextChange = newText => {
  state.dialoguesPage.newMessageText = newText;
  rerenderEntireTree(state);
};
export default state;
