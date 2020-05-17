import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const GET_USER_STATUS = "GET_USER_STATUS";

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
    status: null,
};

export const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (action.post) {
                let newId = state.posts.allPosts.length + 1;
                let newPost = {
                    id: newId,
                    message: action.post,
                    likeCount: 0,
                };
                return {
                    ...state,
                    posts: {
                        ...state.posts,
                        allPosts: [...state.posts.allPosts, newPost],
                    },
                };
            }
            return state;
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case GET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

export const getUserStatusAC = (status) => ({
    type: GET_USER_STATUS,
    status,
});

export const addPostActionCreator = (post) => ({ type: ADD_POST, post });

export const setUserProfileAC = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

export const setUserProfile = (userId) => (dispatch) => {
    profileAPI.getUser(userId).then((data) => {
        dispatch(setUserProfileAC(data));
    });
};

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
        dispatch(getUserStatusAC(data));
    });
};

export const updateStatus = (status, userId) => (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getUserStatus(userId));
        }
    });
};
