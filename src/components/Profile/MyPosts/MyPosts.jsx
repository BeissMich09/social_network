import React from "react";
import classProfile from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  let postsElem = props.postData.map((post) => (
    <Post message={post.message} like={post.likes} id={post.id} key={post.id} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPost);
  };

  return (
    <div className={classProfile.my_posts}>
      <div className="header_posts">
        <h4>My Posts</h4>
      </div>
      <NewPostForm onSubmit={onAddPost} />
      <div className={classProfile.added_news}>{postsElem}</div>
    </div>
  );
};

let NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classProfile.add_news}>
      <Field
        name="newPost"
        component="textarea"
        placeholder="Your news"
        value={props.newPostTextChange}
      />
      <button>Send</button>
    </form>
  );
};
NewPostForm = reduxForm({ form: "post" })(NewPostForm);
export default MyPosts;
