import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
    if (props.author) {
        return (
            <div className={s.messageWrapper + " " + s.right}>
                <div className={s.message}>
                    {props.message}
                    <img src={props.avatar} alt="avatar" />
                </div>
            </div>
        );
    } else {
    }
    return (
        <div className={s.messageWrapper}>
            <div className={s.message}>
                <img src={props.avatar} alt="avatar" />
                {props.message}
            </div>
        </div>
    );
};

export default Message;
