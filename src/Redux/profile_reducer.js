const ADD_POST = "ADD-POST";
const NEW_POST_TEXT_CHANGE = "NEW-POST-TEXT-CHANGE";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", likes: 15 },
    { id: 2, message: "Love me", likes: 10 },
    { id: 3, message: "Я люблю Сережу", likes: 45 },
    { id: 4, message: "Я хочу найти работу", likes: 14 },
  ],
  newPostText: "",
};

const reducerProfile = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0,
      };
      return Object.assign({}, state, {
        postData:  state.postData.concat(newPost),
        newPostText: "",
      });
    case NEW_POST_TEXT_CHANGE:
      return Object.assign({}, state, { newPostText: action.newText });
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
export default reducerProfile;
