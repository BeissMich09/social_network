import React from "react";
import classProfile from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  /*   const posts = [
    { message: "Hi, how are you?", like: "15" },
    { message: "Love me?", like: "10" },
    { message: "Сережа серый пидор?", like: "5" },
    { message: "Сережа серый пидор?", like: "5" },
    { message: "Сережа серый пидор?", like: "5" }, 
    { message: "Сережа серый пидор?", like: "5" }
  ]; */
  return (
    <div className={classProfile.my_posts}>
      <div className="header_posts">
        <h4>My Posts</h4>
      </div>

      <div className={classProfile.add_news}>
        <textarea placeholder="Your news"></textarea>
        <button>Send</button>
      </div>

      <div className={classProfile.added_news}>
        {/*   {posts.map(post => {
          return <Post message={post.message} like={post.like} />;
        })} */}
        <Post message="Hi, how are you?" like="15" />
        <Post message="Love me" like="10" />
        <Post message="Сережа серый пидор" like="14" />
      </div>
    </div>
  );
};

export default MyPosts;
