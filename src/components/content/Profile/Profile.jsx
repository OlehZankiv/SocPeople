import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPost/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.wrapper_avatar}>
                <div class={s.img_head}></div>
                <div className={s.avatar}>ava + descr</div>
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;
