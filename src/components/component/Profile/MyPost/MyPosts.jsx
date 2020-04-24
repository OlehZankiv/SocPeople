import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { writeNewPostActionCreator, addPostActionCreator } from "../../../../redux/profile_reducer";

const MyPosts = (props) => {
    
    let linkTextArea = React.createRef();
    let writePost = () => {
        let text = linkTextArea.current.value;
        props.writePost(text);
    }

    let addPost = () => {
        props.addPost();
    }

    return (
        <div className={s.posts}>
            <div className={s.new_post}>
                <textarea
                    onChange={writePost}
                    ref={linkTextArea}
                    placeholder="Enter post"
                    value={props.postValue}
                />
                <div className={s.btn_ens}>
                    <button onClick={addPost}>SEND</button>
                </div>
            </div>
            <div className={s.old_posts}>{props.posts}</div>
        </div>
    );
};

export default MyPosts;
