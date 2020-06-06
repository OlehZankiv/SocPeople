import React from "react";
import { userLogin } from "../../../redux/auth_reducer";
import { connect } from "react-redux";
import LoginFormik from "./LoginFormik";

const LoginContainer = ({ isAuth, userLogin, captcha, errorMessage }) => {
    return <LoginFormik isAuth={isAuth} captcha={captcha} userLogin={userLogin} errorMessage={errorMessage} />;
};

let MapStateToProps = ({ auth }) => ({
    isAuth: auth.isAuth,
    captcha: auth.captcha,
    errorMessage: auth.errorMessage,
});

export default connect(MapStateToProps, { userLogin })(LoginContainer);
