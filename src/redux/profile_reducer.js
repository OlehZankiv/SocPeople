import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const GET_USER_STATUS = "profile/GET_USER_STATUS";
const SET_AVATAR = "profile/SET_AVATAR";

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
        case SET_AVATAR:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {
                        ...state.profile.photos,
                        large: action.photo,
                    },
                },
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

export const setAvatarAC = (photo) => ({
    type: SET_AVATAR,
    photo,
});

export const setUserProfile = (userId) => (dispatch) => {
    profileAPI.getUser(userId).then((data) => {
        dispatch(setUserProfileAC(data));
    });
};

export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(getUserStatusAC(data));
};

export const updateStatus = (status, userId) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(getUserStatus(userId));
    }
};

export const setAvatar = (file) => async (dispatch) => {
    const data = await profileAPI.setAvatar(file);
    if (data.resultCode === 0) {
        dispatch(setAvatarAC(data.data.photos.large));
    }
};

export const setProfileData = (profileData) => async (dispatch, getState) => {
    const id = getState().profile.profile.userId;
    const data = await profileAPI.setProfileData(profileData);

    if (data.resultCode === 0) {
        dispatch(setUserProfile(id));
    } else {
        dispatch(stopSubmit("profileForm", { _error: data.messages }));
        return Promise.reject(data.messages);
    }
};
