import React from "react";
import style from "./SidebarFriends.module.css";
import BestFriends from "./BestFriends/BestFriends";

const SidebarFriends = props => {
  let bestFriend = props.arrayBest.map(friend => <BestFriends name={friend.name} />);

  return <div className={style.item}>{bestFriend}</div>;
};

export default SidebarFriends;
