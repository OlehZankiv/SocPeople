import React from "react";
import s from "./Navbar.module.css";
import FriendsContainer from "./Friends/FriendsContainer";
import NavbarLink from "../component/common/Link/NavbarLink";

const Navbar = (props) => {

    return (
        <div className={s.sidebar}>
            <nav className={s.nav}>
                <h2>Shortcuts</h2>
                <hr />
                {NavbarLink("profile", "Profile")}
                {NavbarLink("dialogs", "Messages")}
                {NavbarLink("news", "News")}
                {NavbarLink("music", "Music")}
                {NavbarLink("settings", "Settings")}
                {NavbarLink("users", "Users")}
            </nav>
            <div className={s.friendsWrapper}>
                <FriendsContainer />
            </div>
        </div>
    );
};

export default Navbar;
