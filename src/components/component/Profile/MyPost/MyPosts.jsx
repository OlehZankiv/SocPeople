import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { writeNewPostActionCreator, addPostActionCreator } from "../../../../redux/profile_reducer";

const MyPosts = (props) => {
    let posts = props.posts.allPosts.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} />
    ));

    let linkTextArea = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let writeNewPost = () => {
        props.dispatch(writeNewPostActionCreator(linkTextArea.current.value));
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
