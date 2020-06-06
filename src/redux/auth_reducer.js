import { loginAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_USER_ID = "auth/SET_USER_ID";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";
const SET_ERROR = "auth/SET_ERROR";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null,
    captcha: null,
};

export const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_USER_ID: {
            return {
                ...state,
                userId: action.userId,
            };
        }
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captcha: action.captchaUpl,
            };
        }
        case SET_ERROR: {
            return {
                ...state,
                errorMessage: action.message,
            };
        }
        default:
            return state;
    }
};

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
        isAuth,
    },
});

export const setUserId = (userId) => ({
    type: SET_USER_ID,
    userId,
});

export const setCaptchaUrl = (captchaUpl) => ({
    type: SET_CAPTCHA_URL,
    captchaUpl,
});

export const setError = (message) => ({
    type: SET_ERROR,
    message,
});

export const login = () => async (dispatch) => {
    let data = await loginAPI.login();

    if (data.resultCode === 0) {
        let { email, id, login } = data.data;
        dispatch(setUserData(id, email, login, true));
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    dispatch(setCaptchaUrl(data.url));
};

export const userLogin = (email, password, rememberMe = false, captcha = null) => async (dispatch) => {
    let data = await loginAPI.userLogin(email, password, rememberMe, captcha);
    switch (data.resultCode) {
        case 0:
            login();
            dispatch(login());
            dispatch(setError(null));
            break;
        case 1:
            dispatch(setError(data.messages));
            break;
        case 10:
            dispatch(getCaptchaUrl());
            dispatch(setError(data.messages));
            break;
        default:
            console.log("Something went wrong");
    }
};

export const userLogout = () => async (dispatch) => {
    let data = await loginAPI.userLogout();
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
};

export default auth_reducer;
