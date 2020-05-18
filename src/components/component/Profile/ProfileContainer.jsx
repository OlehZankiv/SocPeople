import React from "react";
import Profile from "./Profile";
import {
    setUserProfile,
    getUserStatus,
    updateStatus,
} from "../../../redux/profile_reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.setUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        );
    }
}

let mapStateToProps = ({profile, auth}) => {
    return {
        profile: profile.profile,
        status: profile.status,
        userId: auth.userId,
    };
};
export default compose(
    connect(mapStateToProps, { setUserProfile, getUserStatus, updateStatus }),
    withAuthRedirect,
    withRouter
)(ProfileContainer);
