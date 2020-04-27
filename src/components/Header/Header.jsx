
import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-9/p960x960/91699638_108186767508172_2449182487541186560_o.png?_nc_cat=107&_nc_sid=85a577&_nc_oc=AQnKXW3rPl6jiLZkX4wgjk9XSVD_Ff8ueXQiwW52PXzlXRzk0MrhyLEqs7Qhx9bo8_g&_nc_ht=scontent.flwo3-1.fna&oh=4193c98333d93f5aaceaf191a58d6d31&oe=5ECD63E2"
                alt="logo"
            />
            <h1>SocPeople</h1>
        </header>
    );
};

export default Header;
