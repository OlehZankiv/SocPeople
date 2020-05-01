import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unFollowAC, setUsersAC, setTotalUsersCountAC, changePageAC} from "../../../redux/users_reducer";

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        changePage: (currentPage) => {
            dispatch(changePageAC(currentPage));
        }
    };
};

const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);

export default UsersContainer;
