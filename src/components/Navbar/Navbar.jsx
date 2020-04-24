import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = (props) => {
    return (
        <div className={s.sidebar}>
            <nav className={s.nav}>
                <h2>Shortcuts</h2>
                <hr />
                <div>
                    <NavLink to="/profile" activeClassName={s.active}>
                        Profile
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={s.active}>
                        Messages
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/news" activeClassName={s.active}>
                        News
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/music" activeClassName={s.active}>
                        Music
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/settings" activeClassName={s.active}>
                        Settings
                    </NavLink>
                </div>
            </nav>
            <div className={s.friendsWrapper}>
                <FriendsContainer store={props.store}/>
            </div>
        </div>
    );
};

export default Navbar;
