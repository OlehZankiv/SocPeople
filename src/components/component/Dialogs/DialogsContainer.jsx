import React from "react";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {
    checkMessageActionCreator,
    addMessActionCreator,
} from "../../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogs;
                let dialogs = state.dialogs.map((d) => (
                    <DialogItem id={d.id} name={d.name} avatar={d.avatar} />
                ));

                let messages = state.messages.allMessages.map((message) => (
                    <Message
                        message={message.message}
                        avatar={message.avatar}
                        author={message.author}
                    />
                ));

                let addMessage = () => {
                    store.dispatch(addMessActionCreator());
                };

                let checkMessage = (text) => {
                    store.dispatch(checkMessageActionCreator(text));
                };
                return (
                    <Dialogs
                        dialogs={dialogs}
                        messages={messages}
                        addMessage={addMessage}
                        checkMessage={checkMessage}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
