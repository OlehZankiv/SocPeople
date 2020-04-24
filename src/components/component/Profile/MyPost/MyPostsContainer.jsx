import React from "react";
import Post from "./Post/Post";
import {
    writeNewPostActionCreator,
    addPostActionCreator,
} from "../../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let posts = state.profile.posts.allPosts.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} />
    ));
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let writePost = (text) => {
        props.store.dispatch(writeNewPostActionCreator(text));
    };

    return (
        <MyPosts
            posts={posts}
            addPost={addPost}
            writePost={writePost}
            postValue={state.profile.posts.postText}
        />
    );
};

export default MyPostsContainer;
