import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={s.messageWrapper + (props.author ? " " + s.right : "")}>
            <div className={s.message}>
                {props.author ? props.message : ""}
                <img src={props.avatar} alt="avatar" />
                {!props.author ? props.message : ""}
            </div>
        </div>
    );
};

export default Message;
