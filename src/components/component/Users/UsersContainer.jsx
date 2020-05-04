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
import Loader from "../common/Loader";
import { userAPI } from "../../../api/api";

class UsersApi extends React.Component {
    componentDidMount() {
        this.props.changeFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(
            (data) => {
                this.props.changeFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            }
        );
    }

    changePage = (page) => {
        this.props.changePage(page);
        this.props.changeFetching(true);
        userAPI.getUsers(page, this.props.pageSize).then((data) => {
            this.props.changeFetching(false);
            this.props.setUsers(data.items);
        });
    };

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

    render() {
        return (
            <div>
                {this.props.isFetching ? (
                    <Loader />
                ) : (
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.users}
                        changePage={this.changePage}
                    />
                )}
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
