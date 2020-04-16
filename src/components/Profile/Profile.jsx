import React from "react";
import classProfile from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  console.log('props', props)
  return (
    <div className={classProfile.content}>
      <img
        src="https://avatars.mds.yandex.net/get-pdb/1516664/09249b5a-9f96-419d-8d26-14d33b095ec2/s1200"
        alt=""
      />
      <ProfileInfo />
      <MyPostsContainer
        newPostTextChange={props.profilePage.newPostText}
        postData={props.profilePage.postData}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
