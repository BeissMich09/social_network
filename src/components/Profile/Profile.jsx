import React from "react";
import classProfile from"./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
  return (
    <div className={classProfile.content}>
      <img src="https://s1.1zoom.ru/b5050/297/Canada_Mountains_Scenery_488936_1680x1050.jpg" alt="" />
      <div className={classProfile.profile}>Ава + инфа</div>
      <MyPosts/>
    </div>
  );
};


export default Profile;
