import React from "react";
import s from "./Message.module.css";
import cn from "classnames";

const Message = ({ author, message, avatar }) => {
    return (
        <div className={cn(s.messageWrapper, { [s.right]: author })}>
            <div className={s.message}>
                {author && message}
                <img src={avatar} alt="avatar" />
                {!author && message}
            </div>
        </div>
    );
};

export default Message;
