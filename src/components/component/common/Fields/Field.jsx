import React from "react";
import s from "./Field.module.css";
import { Field } from "redux-form";
import { Field as F, ErrorMessage } from "formik";
import cn from "classnames";

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
        <FieldWithError hasError={hasError} meta={meta} classStyle="textAreaWrapper">
            <textarea {...input} {...props} className={cn({ [s.errorField]: hasError })} />
        </FieldWithError>
    );
};

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;

    return (
        <FieldWithError hasError={hasError} meta={meta} classStyle="inputWrapper">
            <input {...input} {...props} className={cn({ [s.errorField]: hasError })} />
        </FieldWithError>
    );
};

export const CreateField = (className, type, name, placeholder, validate, component, labelText) => (
    <div className={s[className]}>
        <Field type={type} name={name} placeholder={placeholder} validate={validate} component={component} />
        {labelText && <label>{labelText}</label>}
    </div>
);

//Formik

export const CreateFieldFormik = (className, type, name, placeholder, component, labelText) => (
    <div className={s[className]}>
        <div className={s.inputWrapper}>
            <F type={type} name={name} placeholder={placeholder} as={component} />
            {labelText && <label htmlFor={name}>{labelText}</label>}
            <ErrorMessage
                className={component === "textarea" ? s.errorInfoTextArea : s.errorInfo}
                name={name}
                component="span"
            />
        </div>
    </div>
);
