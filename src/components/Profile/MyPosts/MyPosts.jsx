import React from "react";
import classProfile from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPostForm from "./NewPostForm";

const MyPosts = React.memo((props) => {
  console.log("lalalal");
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
});

export default MyPosts;
