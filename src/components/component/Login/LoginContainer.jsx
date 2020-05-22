import React from "react";
import { userLogin } from "../../../redux/auth_reducer";
import { connect } from "react-redux";
import Login from "./Login";

const LoginContainer = ({ isAuth, userLogin, captcha }) => {
    return <Login isAuth={isAuth} captcha={captcha} userLogin={userLogin} />;
};

let MapStateToProps = ({ auth }) => ({
    isAuth: auth.isAuth,
    captcha: auth.captcha,
});

export default connect(MapStateToProps, { userLogin })(LoginContainer);
