import React from "react";
import User from "./User/User";
import s from "./Users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        let users = [
            {
                id: 1,
                followed: true,
                avatarUrl:
                    "http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-1024x640.jpg",
                fullName: "Putana",
                status: "Unbelievable to forget",
                location: { country: "Ukraine", city: "Charkiv" },
            },
            {
                id: 2,
                followed: true,
                avatarUrl:
                    "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
                fullName: "Yana",
                status: "I'm so beautiful",
                location: { country: "Ukraine", city: "Volyn'" },
            },
            {
                id: 3,
                followed: false,
                avatarUrl:
                    "https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png",
                fullName: "Ovechka",
                status: "You should to trust me",
                location: { country: "Russian", city: "Moscow" },
            },
            {
                id: 4,
                followed: true,
                avatarUrl:
                    "https://i.pinimg.com/236x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
                fullName: "Aleh",
                status: "What are fuck are you doing here?",
                location: { country: "Ukraine", city: "Lviv" },
            },
        ];
        props.setUsersAC(users);
    }

    let users = props.users.map((user) => (
        <User
            key={user.id}
            id={user.id}
            avatar={user.avatarUrl}
            followed={user.followed}
            name={user.fullName}
            status={user.status}
            location={user.location}
            follow={props.follow}
            unFollow={props.unFollow}
        ></User>
    ));

    return <div className={s.usersWrapper}>{users}</div>;
};

export default Users;
