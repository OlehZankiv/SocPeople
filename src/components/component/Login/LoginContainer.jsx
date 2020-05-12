import React from "react";
import { userLogin } from "../../../redux/auth_reducer";
import { connect } from "react-redux";
import Login from "./Login";

const LoginContainer = (props) => {
    return <Login isAuth={props.isAuth} userLogin={props.userLogin} />;
};

let MapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(MapStateToProps, { userLogin })(LoginContainer);
