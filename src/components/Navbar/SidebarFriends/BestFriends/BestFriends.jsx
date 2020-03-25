import React from "react";
import style from "./BestFriends.module.css";


const BestFriends = (props)=>{

    return(
        <div className={style.item}>
        <img src="https://redcdn.net/topicit/images/no-avatar-1.png" alt="" />
        <p>{props.name}</p>
      </div>
    )
}

export default BestFriends;