import React from "react";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {
    checkMessageActionCreator,
    addMessActionCreator,
} from "../../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let dialogs = state.dialogs.dialogs.map((d) => (
        <DialogItem id={d.id} name={d.name} avatar={d.avatar} />
    ));

    let messages = state.dialogs.messages.allMessages.map((message) => (
        <Message
            message={message.message}
            avatar={message.avatar}
            author={message.author}
        />
    ));

    let addMessage = () => {
        props.store.dispatch(addMessActionCreator());
    };

    let checkMessage = (text) => {
        props.store.dispatch(checkMessageActionCreator(text));
    };

    return (
        <Dialogs
            dialogs={dialogs}
            messages={messages}
            addMessage={addMessage}
            checkMessage={checkMessage}
        />
    );
};

export default DialogsContainer;
