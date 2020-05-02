import React from "react";
import Post from "./Post/Post";
import {
    writeNewPostActionCreator as writePost,
    addPostActionCreator as addPost,
} from "../../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let MapStateToProps = (state) => {
    let posts = state.profile.posts.allPosts.map((post) => (
        <Post message={post.message} likeCount={post.likeCount} key={post.id} />
    ));

    return {
        posts: posts,
        postValue: state.profile.posts.postText,
    };
};

const MyPostsContainer = connect(MapStateToProps, {
    addPost,
    writePost,
})(MyPosts);

export default MyPostsContainer;
