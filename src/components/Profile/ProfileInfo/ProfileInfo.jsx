import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={style.profile}>
      <img src={props.profile.photos.large} alt="" />
    </div>
  );
};

export default ProfileInfo;
