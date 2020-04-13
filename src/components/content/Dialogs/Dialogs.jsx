import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem"
import Message from "./Message/Message"


const Dialogs = (props) => {
    return (
        <div className={s.dialogs_wrapper}>
            <h2>
                All Dialogs
                <hr />
            </h2>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    <DialogItem id="1" name="Aleh" />
                    <DialogItem id="2" name="Ovechka" />
                    <DialogItem id="3" name="Yana" />
                    <DialogItem id="4" name="Putana" />
                </div>
                <div className={s.messages}>
                    <Message message="Hi" />
                    <Message message="How are you?" />
                    <Message message="Good, are you?" />
                </div>
            </div>
        </div>
    );
};

export default Dialogs;