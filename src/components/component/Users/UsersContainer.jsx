import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
    followAC as follow,
    unFollowAC as unFollow,
    setUsersAC as setUsers,
    setTotalUsersCountAC as setTotalUsersCount,
    changePageAC as changePage,
    changeFetchingAC as changeFetching,
} from "../../../redux/users_reducer";
import User from "./User/User";
import * as axios from "axios";
import Loader from "../common/Loader";

class UsersApi extends React.Component {
    componentDidMount() {
        this.props.changeFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.changeFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    users = () =>
        this.props.users.map((user) => (
            <User
                key={user.id}
                id={user.id}
                photos={user.photos}
                followed={user.followed}
                name={user.fullName}
                status={user.status}
                location={user.location}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            ></User>
        ));

    changePage = (page) => {
        this.props.changePage(page);
        this.props.changeFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.changeFetching(false);
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        return (
            <div>
                {this.props.isFetching ? <Loader /> : ""}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.users}
                    changePage={this.changePage}
                />
            </div>
        );
    }
}

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

export default connect(MapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalUsersCount,
    changePage,
    changeFetching,
})(UsersApi);
