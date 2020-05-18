import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavbarLink.module.css";

const NavbarLink = (path, description) => (
    <div>
        <NavLink to={"/" + path} activeClassName={s.active}>
            {description}
        </NavLink>
    </div>
);

export default NavbarLink;
