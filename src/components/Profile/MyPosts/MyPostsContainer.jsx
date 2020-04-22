import React from "react";
import {
  addPostActionCreator,
  newPostTextChangeActionCreator,
} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onChangePost = (text) => {
          store.dispatch(newPostTextChangeActionCreator(text));
        };
        return (
          <MyPosts
            newPostText={onChangePost}
            addPost={addPost}
            postData={state.profilePage.postData}
            newPostTextChange={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
