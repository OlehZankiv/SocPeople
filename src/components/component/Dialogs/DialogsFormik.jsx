import React from "react";
import s from "./Dialogs.module.css";
import { Formik, Form } from "formik";
import { maxLength } from "../../../utils/validators/validators";
import { CreateFieldFormik } from "../common/Fields/Field";

let maxLength1000 = maxLength(1000);

const AddMessageForm = ({ addMessage }) => {
    const validate = (values) => {
        const errors = {};
        errors.message = maxLength1000(values.message);

        if (!!errors.message) return errors;
    };
    const addMessageFunc = ({ message }) => {
        addMessage(message);
    };

    return (
        <Formik initialValues={{ message: "" }} validate={validate} onSubmit={addMessageFunc}>
            <Form>
                {CreateFieldFormik("textarea", null, "message", "Enter Message", "textarea")}
                <div className={s.btn}>
                    <button type="submit">Enter</button>
                </div>
            </Form>
        </Formik>
    );
};

const DialogsFormik = React.memo(({ addMessage, dialogs, messages }) => {
    return (
        <div className={s.dialogs_wrapper}>
            <h2>
                All Dialogs
                <hr />
            </h2>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>{dialogs}</div>
                <div className={s.messageWrapper}>
                    <div className={s.messages}>{messages}</div>
                    <hr />
                    <AddMessageForm addMessage={addMessage} />
                </div>
            </div>
        </div>
    );
});

export default DialogsFormik;
