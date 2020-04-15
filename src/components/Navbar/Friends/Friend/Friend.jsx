import React from "react";
import s from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={s.friends}>
            <img src={props.img} alt="avatar"/>
            <div className={props.name}>{props.name}</div>
        </div>
    );
};

export default Friend;
