import React, { useState } from "react";
import s from "./Status.module.css";
import { useEffect } from "react";

let StatusHook = (props) => {
    let [isActiveStatus, changeActive] = useState(false);
    let [status, changeLocalStatus] = useState(props.status);

    useEffect(() => {
        changeLocalStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        changeActive(true);
    };

    let deActivateEditMode = () => {
        changeActive(false);
        if (status !== props.status && status !== "") {
            props.updateStatus(status, props.userId);
        }
    };

    let changeStatus = (e) => {
        changeLocalStatus(e.currentTarget.value);
    };

    return (
        <div className={s.statusWrapper}>
            {!isActiveStatus ? (
                <div className={s.status}>
                    <span onClick={activateEditMode}>
                        {props.status || "status is absent"}
                    </span>
                </div>
            ) : (
                <div className={s.inputStatus}>
                    <input
                        onChange={changeStatus}
                        autoFocus
                        onBlur={deActivateEditMode}
                        type="text"
                        value={status}
                    />
                </div>
            )}
        </div>
    );
};

export default StatusHook;
