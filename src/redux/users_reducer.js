const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const CHANGE_PAGE = "CHANGE_PAGE";
const CHANGE_FETCH = "CHANGE_FETCH";
const FOLLOW_IN_LOADING = "FOLLOW_IN_LOADING";

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInLoad: false,
    followInLoadId: null,
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
            return { ...state, users: [...action.users] };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount };
        case CHANGE_PAGE:
            return { ...state, currentPage: action.currentPage };
        case CHANGE_FETCH:
            return { ...state, isFetching: action.isFetching };
        case FOLLOW_IN_LOADING:
            return { ...state, followInLoad: action.isLoad, followInLoadId: action.userId };

        default:
            return state;
    }
};

export const followAC = (id) => ({ type: FOLLOW, id });
export const unFollowAC = (id) => ({ type: UN_FOLLOW, id });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const changePageAC = (currentPage) => ({
    type: CHANGE_PAGE,
    currentPage,
});
export const changeFetchingAC = (isFetching) => ({
    type: CHANGE_FETCH,
    isFetching,
});
export const followInLoad = (isLoad, userId) => ({
    type: FOLLOW_IN_LOADING,
    isLoad,
    userId,
});
export const setTotalUsersCountAC = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
});
