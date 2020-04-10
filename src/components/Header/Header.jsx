
import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/768px-Microsoft_Edge_logo_%282019%29.svg.png"
                alt="logo"
            />
            <h1>SocPeople</h1>
        </header>
    );
};

export default Header;
