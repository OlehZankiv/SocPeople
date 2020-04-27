const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [],
};

export const users_reducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };
        case UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };
        }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] };

        default:
            return state;
    }
};

export const followAC = (id) => ({ type: FOLLOW, id: id });
export const unFollowAC = (id) => ({ type: UN_FOLLOW, id: id });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });
