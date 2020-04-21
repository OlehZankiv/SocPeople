import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts.allPosts.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} />
    ));

    let linkTextArea = React.createRef();

    let addPost = () => {
        let action = {
            type: "ADD-POST",
        };
        props.dispatch(action);
    };

    let writeNewPost = () => {
        let action = {
            type: "CHECK-POST-TEXT",
            text: linkTextArea.current.value,
        };
        props.dispatch(action);
    };

    return (
        <div className={s.posts}>
            <div className={s.new_post}>
                <textarea
                    onChange={writeNewPost}
                    ref={linkTextArea}
                    placeholder="Enter post"
                    value={props.posts.postText}
                />
                <div className={s.btn_ens}>
                    <button onClick={addPost}>SEND</button>
                </div>
            </div>
            <div className={s.old_posts}>{posts}</div>
        </div>
    );
};

export default MyPosts;
