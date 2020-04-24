import React from "react";
import {
  addPostActionCreator,
  newPostTextChangeActionCreator,
} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onChangePost = (text) => {
//           store.dispatch(newPostTextChangeActionCreator(text));
//         };
//         return (
//           <MyPosts
//             newPostText={onChangePost}
//             addPost={addPost}
//             postData={state.profilePage.postData}
//             newPostTextChange={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    newPostTextChange: state.profilePage.newPostText,
    postData: state.profilePage.postData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: ()=>{
      dispatch(addPostActionCreator());
    },
    newPostText:(text)=>{
      dispatch(newPostTextChangeActionCreator(text));
    }
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
