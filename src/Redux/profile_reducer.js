import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const NEW_POST_TEXT_CHANGE = "NEW-POST-TEXT-CHANGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postData: [
    { id: 1, message: "Hi, how are you?", likes: 15 },
    { id: 2, message: "Love me", likes: 10 },
    { id: 3, message: "Я люблю Сережу", likes: 45 },
    { id: 4, message: "Я хочу найти работу", likes: 14 },
  ],
  newPostText: "",
  profile: null,
  status: "",
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
        postData: state.postData.concat(newPost),
        newPostText: "",
      });
    case NEW_POST_TEXT_CHANGE:
      return Object.assign({}, state, { newPostText: action.newText });
    case SET_USER_PROFILE:
      return Object.assign({}, state, { profile: action.profile });
    case SET_STATUS:
      return Object.assign({}, state, { status: action.status });
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const setStatusAC = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
  .then((response) => {
    dispatch(setStatusAC(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
  .then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  });
};

export const newPostTextChangeActionCreator = (text) => {
  return { type: NEW_POST_TEXT_CHANGE, newText: text };
};
export default reducerProfile;
