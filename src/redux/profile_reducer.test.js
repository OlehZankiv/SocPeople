import {
    profile_reducer,
    addPostActionCreator,
    setUserProfile,
    getUserStatus,
} from "./profile_reducer";

let state = {
    posts: {
        allPosts: [
            {
                id: 1,
                message: "Hello, It's my first props",
                likeCount: 6,
            },
            { id: 2, message: "It's very funny!", likeCount: 11 },
        ],
        postText: "",
    },
    profile: null,
    status: null,
};

it("post should be added", () => {
    let newPost = "Hello my friend";

    let newState = profile_reducer(state, addPostActionCreator(newPost));

    expect(
        newState.posts.allPosts[newState.posts.allPosts.length - 1].message
    ).toBe(newPost);
});