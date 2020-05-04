import React from "react";
import s from "./User.module.css";
import user from "../../../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { userAPI } from "../../../../api/api";

let User = (props) => {
    let follow = () => {
        userAPI.follow(props.id).then((response) => {
            props.follow(props.id);
        });
    };

    let unFollow = () => {
        userAPI.unFollow(props.id).then((response) => {
            props.unFollow(props.id);
        });
    };

    return (
        <div>
            <div className={s.wrapperUser}>
                <div className={s.avatar}>
                    <NavLink to={`/profile/${props.id}`}>
                        <img
                            src={props.photos.small ? props.photos.small : user}
                            alt="avatar"
                        />
                    </NavLink>
                    {props.followed ? (
                        <button onClick={unFollow}>UNFOLLOW</button>
                    ) : (
                        <button onClick={follow}>FOLLOW</button>
                    )}
                </div>

                <div className={s.descr}>
                    <h2 className={s.name}>{props.name}</h2>
                    <p className={s.status}>{props.status}</p>
                    <div className={s.location}>
                        <div className={s.country}>
                            {"props.location.country"}
                        </div>
                        <div className={s.city}>{"props.location.city"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
