import React from "react";
import { userLogin } from "../../../redux/auth_reducer";
import { connect } from "react-redux";
import Login from "./Login";

const LoginContainer = ({ isAuth, userLogin }) => {
    return <Login isAuth={isAuth} userLogin={userLogin} />;
};

let MapStateToProps = ({ auth }) => ({
    isAuth: auth.isAuth,
});

export default connect(MapStateToProps, { userLogin })(LoginContainer);
