import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import { checkMessageActionCreator, addMessActionCreator } from "../../../redux/state";

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
        props.dispatch(addMessActionCreator());
    };

    let checkMessage = () => {
        props.dispatch(checkMessageActionCreator(newMessage.current.value));
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
                            onChange={checkMessage}
                            ref={newMessage}
                            placeholder="Enter Message"
                            value={props.messages.textOfArea}
                        />
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
