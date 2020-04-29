import React from "react";
import style from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = props => {
  let friendsList = props.allFriend.map(friend => <Friend name={friend.name} id={friend.id} key={friend.id}/>);
  return (
    <div className={style.item}>
      <h1>Friends</h1>
      <div className={style.content}>
        {friendsList}
      </div>
    </div>
  );
};

export default Friends;
