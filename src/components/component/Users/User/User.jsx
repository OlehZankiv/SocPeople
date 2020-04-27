import React from "react";
import s from "./User.module.css";

let User = (props) => {
    let follow = () => {
        props.follow(props.id);
    };

    let unFollow = () => {
        props.unFollow(props.id);
    };
    return (
        <div>
            <div className={s.wrapperUser}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt="avatar" />
                    {props.followed ? (
                        <button onClick={unFollow}>FOLLOW</button>
                    ) : (
                        <button onClick={follow}>UNFOLLOW</button>
                    )}
                </div>

                <div className={s.descr}>
                    <h2 className={s.name}>{props.name}</h2>
                    <p className={s.status}>{props.status}</p>
                    <div className={s.location}>
                        <div className={s.country}>
                            {props.location.country}
                        </div>
                        <div className={s.city}>{props.location.city}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
