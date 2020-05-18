import React from "react";
import s from "./User.module.css";
import user from "../../../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = ({
    follow,
    unFollow,
    id,
    photos,
    followInLoadId,
    followed,
    isLoad,
    name,
    status,
}) => {
    let userFollow = () => {
        follow(id);
    };

    let userUnFollow = () => {
        unFollow(id);
    };

    return (
        <div>
            <div className={s.wrapperUser}>
                <div className={s.avatar}>
                    <NavLink to={`/profile/${id}`}>
                        <img
                            src={photos.small ? photos.small : user}
                            alt="avatar"
                        />
                    </NavLink>
                    {followed ? (
                        isLoad && followInLoadId === id ? (
                            <button disabled onClick={userUnFollow}>
                                UNFOLLOW
                            </button>
                        ) : (
                            <button onClick={userUnFollow}>UNFOLLOW</button>
                        )
                    ) : isLoad && followInLoadId === id ? (
                        <button disabled onClick={userFollow}>
                            FOLLOW
                        </button>
                    ) : (
                        <button onClick={userFollow}>FOLLOW</button>
                    )}
                </div>

                <div className={s.descr}>
                    <h2 className={s.name}>{name}</h2>
                    <p className={s.status}>{status}</p>
                    <div className={s.location}>
                        <div className={s.country}>{"country"}</div>
                        <div className={s.city}>{"city"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
