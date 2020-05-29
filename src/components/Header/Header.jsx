import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ userLogout, isAuth, userName }) => {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <img
                    src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png"
                    alt="logo"
                />
                <h1>SocPeople</h1>
            </div>
            <div className={s.loginWrapper}>
                {isAuth ? (
                    <div>
                        <NavLink to="/profile" className={s.login}>
                            {userName}
                        </NavLink>
                        <button onClick={() => userLogout()} className={s.logOut}>
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
