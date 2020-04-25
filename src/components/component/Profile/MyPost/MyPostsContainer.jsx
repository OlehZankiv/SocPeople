import React from "react";
import Post from "./Post/Post";
import {
    writeNewPostActionCreator,
    addPostActionCreator,
} from "../../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let MapStateToProps = (state) => {
    let posts = state.profile.posts.allPosts.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} />
    ));

    return {
        posts: posts,
        postValue: state.profile.posts.postText,
    };
};

let MapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        writePost: (text) => dispatch(writeNewPostActionCreator(text)),
    };
};

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;
