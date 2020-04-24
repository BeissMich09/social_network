import React from "react";
import style from "./SidebarFriends.module.css";
import BestFriends from "./BestFriends/BestFriends";
// import StoreContext from "../../../StoreContext";

const SidebarFriends = (props) => {
  return (
    null
    /*{ <StoreContext.Consumer>
      {(store) => {
        console.log(store)
        let bestFriend = store.getState().friendPage.arrayBest.map((friend) => (
          <BestFriends name={friend.name} />
        ));
        return <div className={style.item}>{bestFriend}</div>;
      }}
    </StoreContext.Consumer> }*/
  );
};

export default SidebarFriends;
