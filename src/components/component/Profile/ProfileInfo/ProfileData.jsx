import React from "react";
import s from "./ProfileInfo.module.css";
import user from "../../../../assets/images/user.png";
import StatusHook from "./Status/StatusHook";
import download from "../../../../assets/images/download.png";

const ProfileData = ({ profile, status, updateStatus, setAvatar, isOwner }) => {
    const setNewAvatar = (e) => {
        if (e.target.files.length === 1) {
            setAvatar(e.target.files[0]);
        }
    };

    return (
        <div className={s.profileInfoWrapper}>
            <div className={s.avatar}>
                <img src={profile.photos.large || user} alt="avatar" />
                {isOwner && (
                    <div className={s.inputFileWrapper}>
                        <input
                            type="file"
                            className={s.inputFile}
                            id="file"
                            onChange={setNewAvatar}
                        />
                        <label htmlFor="file">
                            <img src={download} alt="download" />
                        </label>
                    </div>
                )}
            </div>
            <div className={s.descrWrapper}>
                {profile.lookingForAJob ? (
                    <div className={s.searchJob}>
                        <img
                            src="https://logos.textgiraffe.com/logos/logo-name/Job-designstyle-kiddo-m.png"
                            alt="job"
                        ></img>
                        <div className={s.jobDescr}>
                            {profile.lookingForAJobDescription}
                        </div>
                    </div>
                ) : (
                    <div className={s.searchJob + " " + s.jobDescr}>
                        "РАБОТА НЕ ТРЕБУЕТСЯ"
                    </div>
                )}
                <div className={s.wrapperName}>
                    <div>{profile.aboutMe}</div>
                    <div className={s.name}>{profile.fullName}</div>
                    <StatusHook
                        userId={profile.userId}
                        updateStatus={updateStatus}
                        status={status}
                        isOwner={isOwner}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileData;
