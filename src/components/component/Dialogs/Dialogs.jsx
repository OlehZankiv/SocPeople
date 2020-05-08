import React from "react";
import s from "./Dialogs.module.css";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
    let addMessage = () => {
        props.addMessage();
    };

    let newMessage = React.createRef();
    let checkMessage = () => {
        props.checkMessage(newMessage.current.value);
    };

    return (
        <div className={s.dialogs_wrapper}>
            <h2>
                All Dialogs
                <hr />
            </h2>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>{props.dialogs}</div>
                <div className={s.messageWrapper}>
                    <div className={s.messages}>{props.messages}</div>
                    <hr />
                    <div>
                        <textarea
                            onChange={checkMessage}
                            ref={newMessage}
                            placeholder="Enter Message"
                            value={props.textOfArea}
                        />
                        <div className={s.btn}>
                            <button onClick={addMessage}>Enter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
