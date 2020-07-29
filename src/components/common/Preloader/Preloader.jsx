import React from "react";
import preloader from "../../../assets/img/Loading-circles-acs-rectangles.webp";
import style from "./Preloader.module.css"


const Preloader=()=>{
    return(
        <div className={style.item}>
        <img alt="loader" src={preloader} />
        </div>
    )
}

export default Preloader;