import React from "react";
import classProfile from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={classProfile.content}>
      <img
        src="https://avatars.mds.yandex.net/get-pdb/1516664/09249b5a-9f96-419d-8d26-14d33b095ec2/s1200"
        alt=""
      />
      <ProfileInfo />
      <MyPostsContainer 
      // store={props.store}
       />
    </div>
  );
};

export default Profile;
