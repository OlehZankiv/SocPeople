import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogItems = props.dialogs.map((d) => (
        <DialogItem id={d.id} name={d.name} />
    ));

    let message = props.messages.map((message) => (
        <Message message={message.message} />
    ));

    return (
        <div className={s.dialogs_wrapper}>
            <h2>
                All Dialogs
                <hr />
            </h2>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>{dialogItems}</div>
                <div className={s.messages}>{message}</div>
            </div>
        </div>
    );
};

export default Dialogs;
