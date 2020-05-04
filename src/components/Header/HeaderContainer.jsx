import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setUserData } from "../../redux/auth_reducer";
import { loginAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        loginAPI.login().then((data) => {
            if (data.resultCode === 0) {
                let { email, id, login } = data.data;
                this.props.setUserData(id, email, login);
            }
        });
    }

    render() {
        return <Header {...this.props} />;
    }
}

const MapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userName: state.auth.login,
    };
};

export default connect(MapStateToProps, { setUserData })(HeaderContainer);
