import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let link = "/dialogs/" + props.id;
    return (
        <NavLink to={link} className={s.item} activeClassName={s.active}>
            {props.name}
        </NavLink>
    );
};

export default DialogItem;
