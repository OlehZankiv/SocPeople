import React from "react";
import s from "./Dialogs.module.css";
import { reduxForm, Field } from "redux-form";
import { maxLength } from "../../../utils/validators/validators";
import { Textarea } from "../common/Fields/Field";

let maxLength150 = maxLength(1000);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="message"
                placeholder="Enter Message"
                validate={[maxLength150]}
            />
            <div className={s.btn}>
                <button>Enter</button>
            </div>
        </form>
    );
};

const DialogsReduxForm = reduxForm({ form: "message" })(AddMessageForm);

const Dialogs = React.memo((props) => {    
    let addMessage = (formData) => {
        props.addMessage(formData.message);
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
                    <DialogsReduxForm onSubmit={addMessage} />
                </div>
            </div>
        </div>
    );
});

export default Dialogs;
