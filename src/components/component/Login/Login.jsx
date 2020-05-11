import React from "react";
import s from "./Login.module.css";
import { reduxForm, Field } from "redux-form";
import { userLogin } from "../../../redux/auth_reducer";
import { Input } from "../common/Fields/Field";
import { required } from "../../../utils/validators/validators"

const LoginForm = (props) => {
    return (
        <form className={s.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={s.emailInput}
                    type="email"
                    name="email"
                    validate={required}
                    placeholder="email"
                    component={Input}
                />
            </div>
            <div>
                <Field
                    className={s.passInput}
                    name="password"
                    validate={required}
                    placeholder="password"
                    type="password"
                    component={Input}
                />
            </div>
            <div className={s.rememberMe}>
                <Field
                    className={s.rememberMeInput}
                    name="rememberMe"
                    validate={required}
                    type="checkbox"
                    component="input"
                />
                <label>remember me?</label>
            </div>
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        let { email, password, rememberMe } = { ...formData };
        userLogin(email, password, rememberMe);
    };

    return (
        <div className={s.loginFormWrapper}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
