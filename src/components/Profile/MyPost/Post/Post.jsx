import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.post_info}>
                <img
                    src="https://lastfm.freetls.fastly.net/i/u/770x0/140ab88fbc27abfda6001d33718a52db.webp#140ab88fbc27abfda6001d33718a52db"
                    alt="avatar"
                />
                <div className={s.post_descr}>{props.message}</div>
            </div>
            <div className={s.like}>
                {props.likeCount}
                <img src="http://pngimg.com/uploads/like/like_PNG90.png" alt="like" />
            </div>
        </div>
    );
};

export default Post;
