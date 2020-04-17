import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={s.wrapper_avatar}>
            <div className={s.img_head}></div>
            <div className={s.avatar}>ava + descr</div>
        </div>
    );
};

export default ProfileInfo;
