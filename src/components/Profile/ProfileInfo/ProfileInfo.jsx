import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "./../../../assets/img/user-avatar.png";
import workLogo from "../../../assets/img/work_icon.svg";
import searchWorkLogo from "../../../assets/img/no_work_icon.svg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  const mainPhotoSelected = (e) => {
    if (e.target.files && e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  if (!props.profile) {
    return (
      <div className={style.preloader}>
        <Preloader />
      </div>
    );
  }
  return (
    <div className={style.profile}>
      <div className={style.photo}>
        <img
          src={
            props.profile.photos.large !== null
              ? props.profile.photos.large
              : userPhoto
          }
          alt=""
        />
        {props.isOwner && <input onChange={mainPhotoSelected} type="file" />}
      </div>
      {editMode ? (
        <ProfileDataForm
          initialValues={props.profile}
          onSubmit={onSubmit}
          profile={props.profile}
        />
      ) : (
        <ProfileData
          profile={props.profile}
          isOwner={props.isOwner}
          goEditMode={() => setEditMode(true)}
        />
      )}

      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

const ProfileData = (props) => {
  console.log(props.profile);
  return (
    <div className={style.info}>
      {props.isOwner && (
        <button
          onClick={() => {
            props.goEditMode();
          }}
        >
          Редактировать
        </button>
      )}
      <h3>Information</h3>
      <p>Full Name: {props.profile.fullName}</p>
      <p>
        Job:
        {props.profile.lookingForAJob ? (
          <img src={workLogo} alt="Есть работа" />
        ) : (
          <img src={searchWorkLogo} alt="Нет работы" />
        )}
      </p>
      <p>Professional skills: {props.profile.lookingForAJobDescription}</p>
      <p>About me: {props.profile.aboutMe}</p>
      <div>
        Contacts:{" "}
        {Object.keys(props.profile.contacts).map((key) => {
          if (props.profile.contacts[key]) {
            return (
              <Contacts
                key={key}
                contsctTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div>Status: {props.status}</div>
    </div>
  );
};

const Contacts = ({ contsctTitle, contactValue }) => {
  return (
    <div className={style.contact}>
      {contsctTitle}: {contactValue}
    </div>
  );
};

export default ProfileInfo;
