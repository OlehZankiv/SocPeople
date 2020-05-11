import React from "react";
import s from "./Users.module.css";
let Users = (props) => {
    let pages = Math.ceil(props.totalUsersCount / props.pageSize);
    let allPages = [];
    for (let i = 0; i < pages; i++) {
        allPages[i] = i + 1;
    }
    allPages = allPages.map((page, i) => (
        <div key={i} className={s.activeWrapper}>
            <span
                onClick={() => props.changePage(page)}
                className={props.currentPage == page ? s.activeClass : ""}
            >
                {page}
            </span>
        </div>
    ));
    return (
        <div className={s.usersWrapper}>
            <div>{props.users()}</div>
            <div className={s.totalCountWrapper}>{allPages}</div>
        </div>
    );
};

export default Users;
