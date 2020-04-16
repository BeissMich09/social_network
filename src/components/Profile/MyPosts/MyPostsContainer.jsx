import React from "react";
import {
  addPostActionCreator,
  newPostTextChangeActionCreator,
} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onChangePost = (text) => {
    props.dispatch(newPostTextChangeActionCreator(text));
  };

  return (
    <MyPosts
      newPostText={onChangePost}
      addPost={addPost}
      postData={props.postData}
      newPostTextChange={props.newPostTextChange}
    />
  );
};

export default MyPostsContainer;
