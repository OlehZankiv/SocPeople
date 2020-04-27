import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unFollowAC, setUsersAC } from "../../../redux/users_reducer";

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    };
};

let MapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id));
        },
        unFollow: (id) => {
            dispatch(unFollowAC(id));
        },
        setUsersAC: (users) => {
            dispatch(setUsersAC(users));
        },
    };
};

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);

export default UsersContainer;
