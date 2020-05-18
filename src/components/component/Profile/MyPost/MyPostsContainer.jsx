import React from "react";
import Post from "./Post/Post";
import { addPostActionCreator as addPost } from "../../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let MapStateToProps = ({ profile }) => {
    let posts = profile.posts.allPosts.map((post) => (
        <Post {...post} key={post.id} />
    ));

    return {
        posts: posts,
    };
};

const MyPostsContainer = connect(MapStateToProps, {
    addPost,
})(MyPosts);

export default MyPostsContainer;
