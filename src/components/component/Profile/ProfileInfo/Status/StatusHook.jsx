import React, { useState } from "react";
import s from "./Status.module.css";
import { useEffect } from "react";

let StatusHook = ({ status, updateStatus, userId, isOwner }) => {
    let [isActiveStatus, changeActive] = useState(false);
    let [userStatus, changeLocalStatus] = useState(status);

    useEffect(() => {
        changeLocalStatus(status);
    }, [status]);

    let activateEditMode = () => {
        isOwner && changeActive(true);
    };

    let deActivateEditMode = () => {
        changeActive(false);
        if (userStatus !== status && userStatus !== "") {
            updateStatus(userStatus, userId);
        }
    };

    let changeStatus = (e) => {
        changeLocalStatus(e.currentTarget.value);
    };

    return (
        <div className={s.statusWrapper}>
            {!isActiveStatus ? (
                <div className={s.status}>
                    <span className={isOwner ? s.hoverSpan : ""} onClick={activateEditMode}>
                        {status || "status is absent"}
                    </span>
                </div>
            ) : (
                <div className={s.inputStatus}>
                    <input
                        onChange={changeStatus}
                        autoFocus
                        onBlur={deActivateEditMode}
                        type="text"
                        value={userStatus}
                    />
                </div>
            )}
        </div>
    );
};

export default StatusHook;
