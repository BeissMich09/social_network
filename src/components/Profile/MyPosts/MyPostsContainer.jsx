import React from "react";
import {
  addPostActionCreator,
  newPostTextChangeActionCreator,
} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onChangePost = (text) => {
    props.store.dispatch(newPostTextChangeActionCreator(text));
  };

  return (
    <MyPosts
      newPostText={onChangePost}
      addPost={addPost}
      postData={state.profilePage.postData}
      newPostTextChange={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
