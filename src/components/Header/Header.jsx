import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://yt3.ggpht.com/a/AATXAJwjqeBPBlUFN7PkmC6KsliyjFJ9tnva3eaSGxnrlQ=s900-c-k-c0xffffffff-no-rj-mo" alt="" />

      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div>
            {" "}
            {props.login} - <button onClick={props.logout}>Logout</button>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
