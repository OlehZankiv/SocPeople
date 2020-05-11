import React from "react";
import s from "./Field.module.css";

export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.textAreaWrapper}>
            {hasError && <span className={s.errorInfo}>{meta.error}</span>}
            <textarea
                {...input}
                {...props}
                className={hasError ? s.errorField : ""}
            />
        </div>
    );
};

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.inputWrapper}>
            <input
                {...input}
                {...props}
                className={hasError ? s.errorField : ""}
            />
            {hasError && <span className={s.errorInfo}>{meta.error}</span>}
        </div>
    );
};
