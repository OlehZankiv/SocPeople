import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div className={s.new_post}>
                <textarea placeholder="Enter post"></textarea>
                <div className={s.btn_ens}>
                    <button>SEND</button>
                </div>
            </div>
            <div className={s.old_posts}>
                <Post message="Hello, It's my first props" likeCount="6" />
                <Post message="It's very funny!" likeCount="11" />
            </div>
        </div>
    );
};

export default MyPosts;
