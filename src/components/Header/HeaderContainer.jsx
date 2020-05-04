import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setUserData } from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let { email, id, login } = response.data.data;
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
