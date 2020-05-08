import React from "react";
import s from "./ProfileInfo.module.css";
import Loader from "../../common/Loader";
import user from "../../../../assets/images/user.png";
import Status from "./Status/Status";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader />;
    }
    return (
        <div className={s.wrapper_avatar}>
            <div className={s.img_head}></div>
            <div className={s.profileInfoWrapper}>
                <div className={s.avatar}>
                    <img
                        src={
                            props.profile.photos.large
                                ? props.profile.photos.large
                                : user
                        }
                        alt="avatar"
                    />
                </div>
                <div className={s.descrWrapper}>
                    {props.profile.lookingForAJob ? (
                        <div className={s.searchJob}>
                            <img
                                src="https://logos.textgiraffe.com/logos/logo-name/Job-designstyle-kiddo-m.png"
                                alt="job"
                            ></img>
                            <div className={s.jobDescr}>
                                {props.profile.lookingForAJobDescription}
                            </div>
                        </div>
                    ) : (
                        <div className={s.searchJob + " " + s.jobDescr}>
                            "РАБОТА НЕ ТРЕБУЕТСЯ"
                        </div>
                    )}
                    <div className={s.wrapperName}>
                        <div className={s.name}>{props.profile.fullName}</div>
                        <Status status={props.profile.aboutMe} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
