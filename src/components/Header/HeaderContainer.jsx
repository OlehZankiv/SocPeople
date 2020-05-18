import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { userLogout } from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />;
    }
}

const MapStateToProps = ({auth}) => {
    return {
        isAuth: auth.isAuth,
        userName: auth.login,
    };
};

export default connect(MapStateToProps, { userLogout })(HeaderContainer);
