import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.post}>
            Post
            <div className={s.new_post}>new</div>
            <div className={s.old_post}>
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;