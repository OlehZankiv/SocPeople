import { userAPI } from "../api/api";

const FOLLOW = "user/FOLLOW";
const UN_FOLLOW = "user/UN_FOLLOW";
const SET_USERS = "user/SET_USERS";
const SET_TOTAL_USERS_COUNT = "user/SET_TOTAL_USERS_COUNT";
const CHANGE_PAGE = "user/CHANGE_PAGE";
const CHANGE_FETCH = "user/CHANGE_FETCH";
const FOLLOW_IN_LOADING = "user/FOLLOW_IN_LOADING";

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInLoad: false,
    followInLoadId: null,
};

const followAndUnfollow = (state, action, followed) => {
    return {
        ...state,

        users: state.users.map((user) => {
            if (user.id === action.id) {
                return { ...user, followed: followed };
            }
            return user;
        }),
    };
};

export const users_reducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: followAndUnfollow(state, action, true),
            };
        case UN_FOLLOW: {
            return {
                ...state,
                users: followAndUnfollow(state, action, false),
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
            return {
                ...state,
                followInLoad: action.isLoad,
                followInLoadId: action.userId,
            };

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

export const setUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(changeFetchingAC(true));

    const data = await userAPI.getUsers(currentPage, pageSize);

    dispatch(changeFetchingAC(false));
    dispatch(setUsersAC(data.items));
    dispatch(setTotalUsersCountAC(data.totalCount));
};

export const follow = (id) => async (dispatch) => {
    dispatch(followInLoad(true, id));

    await userAPI.follow(id);

    dispatch(follow(id));
    dispatch(followInLoad(id));
};

export const unFollow = (id) => async (dispatch) => {
    dispatch(followInLoad(true, id));

    await userAPI.unFollow(id);

    dispatch(unFollow(id));
    dispatch(followInLoad(false));
};
