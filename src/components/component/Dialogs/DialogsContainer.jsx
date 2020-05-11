import React from "react";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {
    checkMessageActionCreator as checkMessage,
    addMessActionCreator as addMessage,
} from "../../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

let MapStateToProps = (state) => {
    let dialogs = state.dialogs.dialogs.map((d) => (
        <DialogItem id={d.id} name={d.name} avatar={d.avatar} key={d.id} />
    ));

    let messages = state.dialogs.messages.allMessages.map((message) => (
        <Message
            message={message.message}
            avatar={message.avatar}
            author={message.author}
            key={message.id}
        />
    ));

    return {
        dialogs: dialogs,
        messages: messages,
    };
};

export default compose(
    withAuthRedirect,
    connect(MapStateToProps, { addMessage })
)(Dialogs);
