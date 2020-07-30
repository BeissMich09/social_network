import React from "react";
import userPhoto from "../../assets/img/user-avatar.png";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";

let UsersPresent = (props) => {
  return (
    <div className={style.item}>
      {props.users.map((user) => (
        <div className={style.user} key={user.id}>
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
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Unollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersPresent;
