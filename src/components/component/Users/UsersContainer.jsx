import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
    setTotalUsersCountAC as setTotalUsersCount,
    changePageAC as changeCurrentPage,
    setUsers,
    follow,
    unFollow,
} from "../../../redux/users_reducer";
import User from "./User/User";
import Loader from "../common/Loader";
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getFollowInLoad,
    getFollowInLoadId,
    getIsFetching,
    getUsers,
} from "../../../redux/selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setUsers(this.props.currentPage, this.props.pageSize);
    }

    changePage = (page) => {
        this.props.setUsers(page, this.props.pageSize);
        this.props.changeCurrentPage(page);
    };

    users = () =>
        this.props.users.map((user, i) => (
            <User
                {...user}
                key={i}
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isLoad: getFollowInLoad(state),
        followInLoadId: getFollowInLoadId(state),
    };
};

export default connect(MapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalUsersCount,
    changeCurrentPage,
})(UsersContainer);
