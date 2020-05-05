import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "https://www.freeiconspng.com/uploads/man-icon-png-29.png",
        followed: true,
        fullName: { name: "Sergey", surname: "Tsivilev" },
        status: "I'm fine!",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 2,
        photoUrl: "https://www.freeiconspng.com/uploads/man-icon-png-29.png",
        followed: false,
        fullName: { name: "Fedya", surname: "Kopyrin" },
        status: "I'm dreaming.",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl: "https://www.freeiconspng.com/uploads/man-icon-png-29.png",
        followed: true,
        fullName: { name: "Nastya", surname: "Nazarova" },
        status: "Anderer Fehler sind gute Lehrer.",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 4,
        photoUrl: "https://www.freeiconspng.com/uploads/man-icon-png-29.png",
        followed: false,
        fullName: { name: "Valery", surname: "Nazarov" },
        status: "Go to home.",
        location: { city: "Kaliningrad", country: "Russia" },
      },
    ]);
  }

  return (
    <div className={style.item}>
      {props.users.map((user) => (
        <div key={user.id}>
          <div>
            <img src={user.photoUrl} alt="" />
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
                <div>{user.fullName.name}</div>
                <div>{user.fullName.surname}</div>
              </div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.city}</div>
              <div>{user.location.country}</div>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
