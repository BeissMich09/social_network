import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://cdn.onlinewebfonts.com/svg/img_2401.png" alt="" />

      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div> {props.login} - <button onClick={props.logout}>Logout</button> </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
