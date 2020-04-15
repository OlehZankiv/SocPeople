import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} />
    ));

    return (
        <div className={s.posts}>
            <div className={s.new_post}>
                <textarea placeholder="Enter post"></textarea>
                <div className={s.btn_ens}>
                    <button>SEND</button>
                </div>
            </div>
            <div className={s.old_posts}>{posts}</div>
        </div>
    );
};

export default MyPosts;
