import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogItems = props.dialogs.map((d) => (
        <DialogItem id={d.id} name={d.name} avatar={d.avatar} />
    ));

    let message = props.messages.allMessages.map((message) => (
        <Message
            message={message.message}
            avatar={message.avatar}
            author={message.author}
        />
    ));

    let newMessage = React.createRef();

    let addMess = () => {
        let message = newMessage.current.value
        props.messages.addMessage(message);
    };

    return (
        <div className={s.dialogs_wrapper}>
            <h2>
                All Dialogs
                <hr />
            </h2>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>{dialogItems}</div>
                <div className={s.messageWrapper}>
                    <div className={s.messages}>{message}</div>
                    <hr />
                    <div>
                        <textarea
                            ref={newMessage}
                            placeholder="Enter Message"
                        ></textarea>
                        <div className={s.btn}>
                            <button onClick={addMess}>Enter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
