import React from "react";
import Profile from "./Profile";
import { setUserProfile } from "../../../redux/profile_reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

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
let withRedirect = withAuthRedirect(WithUrlDataProfileContainer);
export default connect(mapStateToProps, {
    setUserProfile,
})(withRedirect);
