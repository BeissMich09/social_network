import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/img/user-avatar.png";

class Users extends React.Component {
  componentWillMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={style.item}>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <div>
              <img
                src={user.photos.small !== null ? user.photos.small : userPhoto}
                alt=""
              />
              {user.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(user.id);
                  }}
                >
                  Unollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(user.id);
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
  }
}
export default Users;
