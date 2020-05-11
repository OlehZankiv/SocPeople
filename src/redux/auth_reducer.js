import { loginAPI } from "../api/api";

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
                isAuth: true,
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

export const setUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
    },
});

export const setUserId = (userId) => ({
    type: SET_USER_ID,
    userId,
});

export const login = () => (dispatch) => {
    loginAPI.login().then((data) => {
        if (data.resultCode === 0) {
            let { email, id, login } = data.data;
            dispatch(setUserData(id, email, login));
        }
    });
};

export const userLogin = (email, password, rememberMe) => (dispatch) => {
    debugger
    loginAPI.userLogin(email, password, rememberMe).then((data) => {
        login();
        dispatch(setUserId(data.userId));
    });
};

export default auth_reducer;
