import React from "react";
import userPhoto from "../../assets/img/user-avatar.png";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

let UsersPresent = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
            <NavLink to={`/profile/` + user.id}>
              <img
                src={user.photos.small !== null ? user.photos.small : userPhoto}
                alt=""
              />
            </NavLink>
            {user.followed ? (
              <button
                disabled={props.followingInProgress.some(id=>id===user.id)}
                onClick={() => {
                  props.toggleIsFollowingProgress(true);
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "2207a5d4-08e2-4a3b-98af-c3bbaf315c7d",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(user.id);
                      }
                      props.toggleIsFollowingProgress(false);
                    });
                }}
              >
                Unollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some(id=>id===user.id)}
                onClick={() => {
                  props.toggleIsFollowingProgress(true);
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "2207a5d4-08e2-4a3b-98af-c3bbaf315c7d",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(user.id);
                      }
                      props.toggleIsFollowingProgress(false);
                    });
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
