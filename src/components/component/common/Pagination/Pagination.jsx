import React from "react";
import s from "./Pagination.module.css";

const Pagination = ({ totalUsersCount, pageSize, changePage, currentPage }) => {
    let pages = Math.ceil(totalUsersCount / pageSize);
    let allPages = [];
    for (let i = 0; i < pages; i++) {
        allPages[i] = i + 1;
    }
    allPages = allPages.map((page, i) => (
        <div key={i} className={s.activeWrapper}>
            <span
                onClick={() => changePage(page)}
                className={currentPage === page ? s.activeClass : ""}
            >
                {page}
            </span>
        </div>
    ));
    return <div className={s.totalCountWrapper}>{allPages}</div>;
};

export default Pagination;
