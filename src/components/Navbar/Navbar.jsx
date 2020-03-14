import React from "react";
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <span href="/profile" className={style.item}>
        <a href="/profile">Profile</a>
      </span>
      <div className={`${style.item} ${style.active}`} >
        <a href="/dialogues">Messages</a>
      </div>
      <div className={style.item}>
        <a href="/news">News</a>
      </div>
      <div className={style.item}>
        <a href="/music">Music</a>
      </div>
      <div className={style.item}>
        <a href="/setting">Setting</a>
      </div>
    </nav>
  );
};

export default Navbar;
