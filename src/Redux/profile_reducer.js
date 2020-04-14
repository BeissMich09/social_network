const ADD_POST = "ADD-POST";
const NEW_POST_TEXT_CHANGE = "NEW-POST-TEXT-CHANGE";

const reduerProfile = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likes: 0,
    };
    state.postData.push(newPost);
    state.newPostText = "";
  } else if (action.type === NEW_POST_TEXT_CHANGE) {
    state.newPostText = action.newText;
  }

  return state;
};

export default reduerProfile;