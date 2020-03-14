import React from "react";
import classProfile from "./Post.module.css";

const Post = props => {
  return (
    <div className={classProfile.item}>
      <div className={classProfile.message}>
        <img
          src="https://www.freeiconspng.com/uploads/man-icon-png-29.png"
          alt=""
        />
        <p>{props.message}</p>
      </div>
      <hr />
      <div className={classProfile.like}>
        <span>like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
