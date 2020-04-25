import React from "react";
import Post from "./Post/Post";
import {
    writeNewPostActionCreator,
    addPostActionCreator,
} from "../../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().profile;
                let posts = state.posts.allPosts.map((post) => (
                    <Post message={post.message} likeCount={post.likeCount} />
                ));
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let writePost = (text) => {
                    store.dispatch(writeNewPostActionCreator(text));
                };
                return (
                    <MyPosts
                        posts={posts}
                        postValue={state.posts.postText}
                        addPost={addPost}
                        writePost={writePost}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
