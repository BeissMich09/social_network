import React from "react";
import classProfile from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElem = props.postData.map(post => (
    <Post message={post.message} like={post.likes} />
  ));

  return (
    <div className={classProfile.my_posts}>
      <div className="header_posts">
        <h4>My Posts</h4>
      </div>

      <div className={classProfile.add_news}>
        <textarea placeholder="Your news"></textarea>
        <button>Send</button>
      </div>
      <div className={classProfile.added_news}>{postsElem}</div>
    </div>
  );
};

export default MyPosts;
