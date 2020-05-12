import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    let userLogout = () => {
        props.userLogout();
    };
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <img
                    src="https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-9/p960x960/91699638_108186767508172_2449182487541186560_o.png?_nc_cat=107&_nc_sid=85a577&_nc_oc=AQnKXW3rPl6jiLZkX4wgjk9XSVD_Ff8ueXQiwW52PXzlXRzk0MrhyLEqs7Qhx9bo8_g&_nc_ht=scontent.flwo3-1.fna&oh=4193c98333d93f5aaceaf191a58d6d31&oe=5ECD63E2"
                    alt="logo"
                />
                <h1>SocPeople</h1>
            </div>
            <div className={s.loginWrapper}>
                {props.isAuth ? (
                    <div>
                        <NavLink to="/profile" className={s.login}>
                            {props.userName}
                        </NavLink>
                        <button onClick={userLogout} className={s.logOut}>
                            LOGOUT
                        </button>
                    </div>
                ) : (
                    <NavLink
                        to="/login"
                        className={s.login}
                        activeClassName={s.active}
                    >
                        Login
                    </NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
