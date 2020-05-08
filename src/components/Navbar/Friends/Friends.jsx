import React from "react";
import s from "./Friends.module.css";

const Friends = (props) => {
    
    return (
        <div className={s.friends}>
            <div className={s.wrappH}>
                <h2>Best Friends</h2>
                <hr />{" "}
            </div>
            <div className={s.friendsWrapper}>
            {props.isAuth ? props.friends : "Please Login"}
            </div>
        </div>
    );
};

export default Friends;
