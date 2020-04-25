import React from "react";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {
    checkMessageActionCreator,
    addMessActionCreator,
} from "../../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let MapStateToProps = (state) => {
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

    return {
        dialogs: dialogs,
        messages: messages,
    };
};

let MapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessActionCreator()),
        checkMessage: (text) => dispatch(checkMessageActionCreator(text)),
    };
};

const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs);

export default DialogsContainer;
