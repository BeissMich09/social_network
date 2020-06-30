// import reducerProfile from "./profile_reducer";
// import reducerDialogues from "./dialogues_reducer";
// import reducerFriends from "./friends_reducer";

// let store = {
//   _state: {
//     profilePage: {
//       postData: [
//         { id: 1, message: "Hi, how are you?", likes: 15 },
//         { id: 2, message: "Love me", likes: 10 },
//         { id: 3, message: "Я люблю Сережу", likes: 45 },
//         { id: 4, message: "Я хочу найти работу", likes: 14 },
//       ],
//       newPostText: "",
//     },
//     dialoguesPage: {
//       userArr: [
//         { id: 1, name: "Nastya" },
//         { id: 2, name: "Sergey" },
//         { id: 3, name: "Sanya" },
//         { id: 4, name: "Fedos" },
//         { id: 5, name: "Valera" },
//       ],
//       messageArr: [
//         { id: 1, message: "Hi", name: "Nastya" },
//         { id: 2, message: "How are you?", name: "Sergey" },
//         { id: 3, message: "I'm fine", name: "Nastya" },
//         { id: 4, message: "Go home", name: "Sergey" },
//         { id: 5, message: "I go", name: "Nastya" },
//       ],
//       newMessageText: "",
//     },
//     friendPage: {
//       arrayBest: [
//         { id: 1, name: "Nastya" },
//         { id: 2, name: "Sergey" },
//         { id: 3, name: "Sanya" },
//       ],
//       allFriend: [
//         { id: 1, name: "Nastya" },
//         { id: 2, name: "Sergey" },
//         { id: 3, name: "Sanya" },
//         { id: 4, name: "Fedos" },
//         { id: 5, name: "Valera" },
//         { id: 6, name: "Marina" },
//         { id: 7, name: "Vasya" },
//         { id: 8, name: "Ira" },
//         { id: 9, name: "Inna" },
//         { id: 10, name: "Kirill" },
//       ],
//     },
//   },
//   getState() {
//     return this._state;
//   },
//   _callSubscriber() {
//     console.log("Will be change");
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
  
//   dispatch(action) {
//     console.log("блаблабла")
//     this._state.profilePage = reducerProfile(this._state.profilePage, action);
//     this._state.dialoguesPage = reducerDialogues(this._state.dialoguesPage,action);
//     this._state.friendPage = reducerFriends(this._state.friendPage, action);

//     this._callSubscriber(this._state);
//   },
// };

// export default store;
// // window.store = store;
