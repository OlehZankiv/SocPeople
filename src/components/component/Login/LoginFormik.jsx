import React from "react";
import s from "./Login.module.css";
import { Formik, Form } from "formik";

import { CreateFieldFormik } from "../common/Fields/Field";
import { required } from "../../../utils/validators/validators";
import { Redirect } from "react-router-dom";

const FormComponent = ({ error, captcha, userLogin }) => {
    const onSubmitLogin = (formData) => {
        let { email, password, rememberMe, captcha } = { ...formData };
        userLogin(email, password, rememberMe, captcha);
    };

    const validate = (values) => {
        const errors = {};

        errors.email = required(values.email);
        errors.password = required(values.password);

        if (!!errors.email || !!errors.password) {
            return errors;
        }
    };

    return (
        <Formik onSubmit={onSubmitLogin} initialValues={{ email: "", password: "", rememberMe: false }} validate={validate}>
            <Form className={s.loginForm}>
                {error && <div className={s.errorWrapper}>{error}</div>}
                {CreateFieldFormik("emailInput", "email", "email", "e-mail", "input")}
                {CreateFieldFormik("passInput", "password", "password", "password", "input")}
                {CreateFieldFormik("rememberMe", "checkbox", "rememberMe", null, "input", "remember me?")}
                {captcha && (
                    <div className={s.captcha}>
                        <img src={captcha} alt="captcha" />
                        {CreateFieldFormik("captcha", "text", "captcha", "Enter this symbols", "input")}
                    </div>
                )}
                <button type="submit">LOGIN</button>
            </Form>
        </Formik>
    );
};

const LoginForm = ({ isAuth, userLogin, captcha, errorMessage }) => {
    const errorBlock = () => {
        if (!!errorMessage) {
            return <div className={s.errorBlock}>{errorMessage}</div>;
        }
    };
    return isAuth ? (
        <Redirect to="/profile" />
    ) : (
        <div className={s.loginFormWrapper}>
            <h1>LOGIN</h1>
            {errorBlock()}
            <FormComponent captcha={captcha} userLogin={userLogin} />
        </div>
    );
};

export default LoginForm;
