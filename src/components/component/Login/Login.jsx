import React from "react";
import s from "./Login.module.css";
import { reduxForm } from "redux-form";
import { Input, CreateField } from "../common/Fields/Field";
import { required } from "../../../utils/validators/validators";
import { Redirect } from "react-router-dom";

const LoginForm = ({ handleSubmit, error, captcha }) => {
    return (
        <form className={s.loginForm} onSubmit={handleSubmit}>
            {error && <div className={s.errorWrapper}>{error}</div>}
            {CreateField("emailInput", "email", "email", "e-mail", required, Input)}
            {CreateField("passInput", "password", "password", "password", required, Input)}
            {CreateField("rememberMe", "checkbox", "rememberMe", null, null, "input", "remember me?")}
            {captcha && (
                <div className={s.captcha}>
                    <img src={captcha} alt="captcha" />
                    {CreateField("captcha", "text", "captcha", "Enter this symbols", required, Input)}
                </div>
            )}
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = ({ isAuth, userLogin, captcha }) => {
    const onSubmitLogin = (formData) => {
        let { email, password, rememberMe, captcha} = { ...formData };
        userLogin(email, password, rememberMe, captcha);
    };

    return isAuth ? (
        <Redirect to="/profile" />
    ) : (
        <div className={s.loginFormWrapper}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmitLogin} captcha={captcha} />
        </div>
    );
};

export default Login;
