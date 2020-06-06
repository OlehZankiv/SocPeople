import React from "react";
import Post from "./Post/Post";
import { addPostActionCreator as addPost } from "../../../../redux/profile_reducer";
import { connect } from "react-redux";
import MyPostsFormik from "./MyPostsFormik";

let MapStateToProps = ({ profile }) => {
    let posts = profile.posts.allPosts.map((post) => <Post {...post} key={post.id} />);

    return {
        posts: posts,
    };
};

const MyPostsContainer = connect(MapStateToProps, {
    addPost,
})(MyPostsFormik);

export default MyPostsContainer;
