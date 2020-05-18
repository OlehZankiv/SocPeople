import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostsContainer";

const Profile = ({status, updateStatus, profile}) => {
    return (
        <div>
            <ProfileInfo status={status} updateStatus={updateStatus} profile={profile} />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
