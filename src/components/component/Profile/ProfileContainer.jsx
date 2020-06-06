import React from "react";
import Profile from "./Profile";
import { setUserProfile, getUserStatus, updateStatus, setAvatar, setProfileData } from "../../../redux/profile_reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    updateUser = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.setUserProfile(userId);
        this.props.getUserStatus(userId);
    };

    componentDidMount() {
        this.updateUser();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateUser();
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                setAvatar={this.props.setAvatar}
                setProfileData={this.props.setProfileData}
            />
        );
    }
}

let mapStateToProps = ({ profile, auth }) => {
    return {
        profile: profile.profile,
        status: profile.status,
        userId: auth.userId,
    };
};
export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUserStatus,
        updateStatus,
        setAvatar,
        setProfileData,
    }),
    withAuthRedirect,
    withRouter
)(ProfileContainer);
