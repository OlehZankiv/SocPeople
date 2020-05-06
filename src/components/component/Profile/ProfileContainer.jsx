import React from "react";
import Profile from "./Profile";
import { setUserProfile } from "../../../redux/profile_reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

let WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile,
})(WithUrlDataProfileContainer);
