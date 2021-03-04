import React from "react";
import style from "./Users.module.css";
import User from "./User";

let UsersPresent = (props) => {
  return (
    <div className={style.item}>
      {props.users.map((user) => (
        <User
          user={user}
          key={user.id}
          follow={props.follow}
          unfollow={props.unfollow}
          followingInProgress={props.followingInProgress}
        />
      ))}
    </div>
  );
};

export default UsersPresent;
