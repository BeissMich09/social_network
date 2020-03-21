import React from "react";
import classProfile from "./MyPosts.module.css";
import Post from "./Post/Post";



let postData = [
  {id:1, message:"Hi, how are you?", likes: 15},
  {id:2, message:"Love me", likes: 10},
  {id:3, message:"Я люблю Сережу", likes: 45}
]
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
        <Post message={postData[0].message} like={postData[0].likes} />
        <Post message={postData[1].message} like={postData[0].likes} />
        <Post message={postData[2].message} like={postData[0].likes} />
      </div>
    </div>
  );
};

export default MyPosts;
