import { loginAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_ID = "SET_USER_ID";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
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

export const login = () => (dispatch) => {
    return loginAPI.login().then((data) => {
        if (data.resultCode === 0) {
            let { email, id, login } = data.data;
            dispatch(setUserData(id, email, login, true));
        }
    });
};

export const userLogin = (email, password, rememberMe) => (dispatch) => {
    loginAPI.userLogin(email, password, rememberMe).then((data) => {
        switch (data.resultCode) {
            case 0:
                login();
                dispatch(login());
                break;
            case 1:
                dispatch(stopSubmit("login", { _error: data.messages }));
                break;
            case 10:
                dispatch(stopSubmit("login", { _error: data.messages }));
                break;
        }
    });
};

export const userLogout = () => (dispatch) => {
    loginAPI.userLogout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    });
};

export default auth_reducer;
