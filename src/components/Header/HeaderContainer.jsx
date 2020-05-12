import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { login, userLogout } from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.login();
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

export default connect(MapStateToProps, { login, userLogout })(HeaderContainer);
