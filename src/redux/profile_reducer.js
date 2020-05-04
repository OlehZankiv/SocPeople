const ADD_POST = "ADD-POST";
const CHECK_POST_TEXT = "CHECK-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
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
};

export const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_POST_TEXT:
            return {
                ...state,
                posts: { ...state.posts, postText: action.text },
            };
        case ADD_POST:
            if (state.posts.postText) {
                let newId = state.posts.allPosts.length + 1;
                let newPost = {
                    id: newId,
                    message: state.posts.postText,
                    likeCount: 0,
                };
                return {
                    ...state,
                    posts: {
                        ...state.posts,
                        allPosts: [...state.posts.allPosts, newPost],
                        postText: "",
                    },
                };
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const writeNewPostActionCreator = (text) => ({
    type: CHECK_POST_TEXT,
    text: text,
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
