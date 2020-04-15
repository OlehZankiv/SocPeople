import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let link = "/dialogs/" + props.id;
    return (
        <div className={s.profileItem}>
            <img src={props.avatar} alt="avatar" />
            <NavLink to={link} className={s.item} activeClassName={s.active}>
                <div className={s.name}>{props.name}</div>
            </NavLink>
        </div>
    );
};

export default DialogItem;
