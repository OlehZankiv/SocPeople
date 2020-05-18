import React from "react";
import s from "./Field.module.css";
import { Field } from "redux-form";

const FieldWithError = ({ hasError, meta, classStyle, ...props }) => {
    return (
        <div className={s[classStyle]}>
            {props.children}
            {hasError && <span className={s.errorInfo}>{meta.error}</span>}
        </div>
    );
};

export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;

    return (
        <FieldWithError
            hasError={hasError}
            meta={meta}
            classStyle="textAreaWrapper"
        >
            <textarea
                {...input}
                {...props}
                className={hasError ? s.errorField : ""}
            />
        </FieldWithError>
    );
};

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;

    return (
        <FieldWithError
            hasError={hasError}
            meta={meta}
            classStyle="inputWrapper"
        >
            <input
                {...input}
                {...props}
                className={hasError ? s.errorField : ""}
            />
        </FieldWithError>
    );
};

export const CreateField = (className, type, name, placeholder, validate, component, labelText) => (
    <div className={s[className]}>
        <Field type={type} name={name} placeholder={placeholder}
            validate={validate} component={component} />
        {labelText && <label>{labelText}</label>}
    </div>
);
