import React from "react";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import { addMessActionCreator as addMessage } from "../../../redux/dialogs_reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import DialogsFormik from "./DialogsFormik";

let MapStateToProps = ({ dialogs }) => {
    const allDialogs = dialogs.dialogs.map((dialog) => (
        <DialogItem {...dialog} key={dialog.id} />
    ));

    const allMessages = dialogs.messages.allMessages.map((message) => (
        <Message {...message} key={message.id} />
    ));

    return {
        dialogs: allDialogs,
        messages: allMessages,
    };
};

export default compose(
    withAuthRedirect,
    connect(MapStateToProps, { addMessage })
)(DialogsFormik);
