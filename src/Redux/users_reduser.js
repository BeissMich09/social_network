const ADD_POST = "ADD-POST";
const NEW_POST_TEXT_CHANGE = "NEW-POST-TEXT-CHANGE";

let initialState = {
  users: [
    { id: 1, fullName: {name:"Sergey", surname:"Tsivilev"}, status: "I'm fine!", location:{city:"Moscow", country:"Russia"} },
    { id: 2, fullName:{name:"Fedya", surname:"Kopyrin"}, status: "I'm dreaming.", location:{city:"Moscow", country:"Russia"}},
    { id: 3, fullName:{name:"Nastya", surname:"Nazarova"}, status: "Anderer Fehler sind gute Lehrer.", location:{city:"Moscow", country:"Russia"} },
    { id: 4, fullName:{name:"Valery", surname:"Nazarov"}, status: "Go to home.", location:{city:"Kaliningrad", country:"Russia"}},
  ],
};

const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
   
    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const newPostTextChangeActionCreator = (text) => {
  return { type: NEW_POST_TEXT_CHANGE, newText: text };
};
export default reducerUsers;