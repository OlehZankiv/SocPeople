import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostsContainer";

const Profile = ({ status, updateStatus, profile, setAvatar, isOwner, setProfileData }) => {
    return (
        <div>
            <ProfileInfo
                status={status}
                updateStatus={updateStatus}
                profile={profile}
                setAvatar={setAvatar}
                isOwner={isOwner}
                setProfileData={setProfileData}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
