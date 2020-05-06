import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
    setTotalUsersCountAC as setTotalUsersCount,
    changePageAC as changePage,
    setUsers,
    follow,
    unFollow,
} from "../../../redux/users_reducer";
import User from "./User/User";
import Loader from "../common/Loader";

class UsersApi extends React.Component {
    componentDidMount() {
        this.props.setUsers(this.props.currentPage, this.props.pageSize);
    }

    changePage = (page) => {
        this.props.setUsers(page, this.props.pageSize);
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
                isLoad={this.props.isLoad}
                followInLoadId={this.props.followInLoadId}
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
        isLoad: state.usersPage.followInLoad,
        followInLoadId: state.usersPage.followInLoadId,
    };
};

export default connect(MapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalUsersCount,
    changePage,
})(UsersApi);
