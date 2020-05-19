import React from "react";
import s from "./Users.module.css";
import Pagination from "../common/Pagination/Pagination";
let Users = ({
    totalUsersCount,
    pageSize,
    changePage,
    currentPage,
    users
}) => {
    return (
        <div className={s.usersWrapper}>
            <div>{users()}</div>
            <Pagination
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                changePage={changePage}
                count={4}
            />
        </div>
    );
};

export default Users;
