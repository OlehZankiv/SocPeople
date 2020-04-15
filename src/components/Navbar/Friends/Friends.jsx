import React from "react";
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friends = props.friends.map((friend) => (
        <Friend img={friend.img} name={friend.name} />
    ));
    return (
        <div className={s.friends}>
            <div className={s.wrappH}>
                <h2>Best Friends</h2>
                <hr />{" "}
            </div>
            <div className={s.friendsWrapper}>{friends}</div>
        </div>
    );
};

export default Friends;
