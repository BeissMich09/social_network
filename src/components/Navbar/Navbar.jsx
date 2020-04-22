import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import SidebarFriends from "./SidebarFriends/SidebarFriends";

const Navbar = (props) => {
  return (
    <nav className={style.navbar}>
      <span className={style.item}>
        <NavLink activeClassName={style.activeLink} to="/profile">
          Profile
        </NavLink>
      </span>
      <span className={style.item}>
        <NavLink activeClassName={style.activeLink} to="/dialogues">
          Messages
        </NavLink>
      </span>
      <div className={style.item}>
        <NavLink activeClassName={style.activeLink} to="/news">
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.activeLink} to="/music">
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.activeLink} to="/setting">
          Setting
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink activeClassName={style.activeLink} to="/friends">
          Friends
        </NavLink>
      </div>
      <SidebarFriends /*arrayBest={props.arrayBest}*/ />
    </nav>
  );
};

export default Navbar;
