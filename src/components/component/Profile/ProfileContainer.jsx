import React from "react";
import Profile from "./Profile";
import { setUserProfile } from "../../../redux/profile_reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setUserProfile(userId);
    }
    render() {
        return <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
    };
};
export default compose(
    connect(mapStateToProps, { setUserProfile }),
    withAuthRedirect,
    withRouter
)(ProfileContainer);
