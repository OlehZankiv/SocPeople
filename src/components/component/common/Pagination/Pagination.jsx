import React from "react";
import s from "./Pagination.module.css";
import cn from "classnames"

const Pagination = ({
    totalUsersCount,
    pageSize,
    changePage,
    currentPage,
    count,
}) => {
    let pages = Math.ceil(totalUsersCount / pageSize);
    let allPages = [];
    for (let i = 0; i < pages; i++) {
        allPages[i] = i + 1;
    }

    allPages = allPages.map((page, i) => (
        <div key={i}>
            <span
                onClick={() => {
                    return changePage(page);
                }}
                className={cn({[s.activeClass] : currentPage === page})}
            >
                {page}
            </span>
        </div>
    ));

    let pagePagination = [];
    for (let i = count * -1 - 1; i < count; i++) {
        let page = allPages[currentPage + i];
        page && pagePagination.push(page);
    }

    let toStart = () => {
        changePage(1);
    };

    let toEnd = () => {
        changePage(allPages.length);
    };
    return (
        <div className={s.totalCountWrapper}>
            {currentPage > ++count && (
                <button onClick={toStart} className={s.toStart}>
                    START
                </button>
            )}
            {pagePagination}
            {currentPage < allPages.length - count + 1 && (
                <button onClick={toEnd} className={s.toEnd}>
                    END
                </button>
            )}
        </div>
    );
};

export default Pagination;
