import React from "react";
import s from "./Message.module.css";

const Message = ({ author, message, avatar }) => {
    return (
        <div className={s.messageWrapper + (author && " " + s.right)}>
            <div className={s.message}>
                {author && message}
                <img src={avatar} alt="avatar" />
                {!author && message}
            </div>
        </div>
    );
};

export default Message;
