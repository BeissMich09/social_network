const ADD_POST = "ADD-POST";
const NEW_POST_TEXT_CHANGE = "NEW-POST-TEXT-CHANGE";

const reduerProfile = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case NEW_POST_TEXT_CHANGE:
      state.newPostText = action.newText;
      return state;
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
export default reduerProfile;
