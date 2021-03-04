import React from "react";
import userPhoto from "../../assets/img/user-avatar.png";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={style.user}>
      <div className={style.info}>
        <NavLink to={`/profile/` + user.id}>
          <img
            src={user.photos.small !== null ? user.photos.small : userPhoto}
            alt=""
          />
        </NavLink>
        <div>
          <span>
            <div>
              <div>{user.name}</div>
              <div>{"user.surname"}</div>
            </div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.city"}</div>
            <div>{"user.location.country"}</div>
          </span>
        </div>
      </div>

      <div className={style.buttons}>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
export default User;
