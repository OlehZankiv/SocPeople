import React from "react";
import User from "./User/User";
import s from "./Users.module.css";
import * as axios from "axios";

// let users = [
//     {
//         id: 1,
//         followed: true,
//         avatarUrl:
//             "http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-1024x640.jpg",
//         fullName: "Putana",
//         status: "Unbelievable to forget",
//         location: { country: "Ukraine", city: "Charkiv" },
//     },
//     {
//         id: 2,
//         followed: true,
//         avatarUrl:
//             "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
//         fullName: "Yana",
//         status: "I'm so beautiful",
//         location: { country: "Ukraine", city: "Volyn'" },
//     },
//     {
//         id: 3,
//         followed: false,
//         avatarUrl:
//             "https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png",
//         fullName: "Ovechka",
//         status: "You should to trust me",
//         location: { country: "Russian", city: "Moscow" },
//     },
//     {
//         id: 4,
//         followed: true,
//         avatarUrl:
//             "https://i.pinimg.com/236x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
//         fullName: "Aleh",
//         status: "What are fuck are you doing here?",
//         location: { country: "Ukraine", city: "Lviv" },
//     },
// ];
class Users extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
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
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        let pages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let allPages = [];
        for (let i = 0; i < pages; i++) {
            allPages[i] = i + 1;
        }

        allPages = allPages.map((page) => (
            <span
                key=""
                onClick={() => this.changePage(page)}
                className={this.props.currentPage == page ? s.activeClass : ""}
            >
                {page}
            </span>
        ));
        return (
            <div className={s.usersWrapper}>
                <div>{this.users()}</div>
                <div className={s.totalCountWrapper}>{allPages}</div>
            </div>
        );
    }
}

export default Users;
