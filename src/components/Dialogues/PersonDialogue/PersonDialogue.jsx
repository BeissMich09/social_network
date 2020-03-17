import React from "react";
import style from "./PersonDialogue.module.css";
import { NavLink } from "react-router-dom";

const PersonDialogue = props => {
  console.log(props.path)
  return (
    <div className={style.dialogue_item}>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/dialogues/1">
          Nastya
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/dialogues/2">
          Fedos
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/dialogues/3">
          Тоха
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/dialogues/4">
          Саня
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to="/dialogues/5">
          Игорь
        </NavLink>
      </div>
    </div>
  );
};

export default PersonDialogue;
