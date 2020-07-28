import React from "react";
import userPhoto from "../../assets/img/user-avatar.png";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
// import Pagination from "react-js-pagination";

let UsersPresent = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.item}>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChange={props.onPageChanged}
      />
      {/* <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && style.selectedPage}
              onClick={(e) => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div> */}
      {props.users.map((user) => (
        <div className={style.user} key={user.id}>
          <div>
            <NavLink to={`/profile/` + user.id}>
              <img
                src={user.photos.small !== null ? user.photos.small : userPhoto}
                alt=""
              />
            </NavLink>
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
