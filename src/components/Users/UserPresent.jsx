import React from "react";
import userPhoto from "../../assets/img/user-avatar.png";
import style from "./Users.module.css";

let UsersPresent = (props) => {
    let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize
      );
  
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
  
    return (
    <div className={style.item}>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div>
            <img
              src={user.photos.small !== null ? user.photos.small : userPhoto}
              alt=""
            />
            {user.followed ? (
              <button
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Unollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
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
      ))}
    </div>
  );
};

export default UsersPresent;