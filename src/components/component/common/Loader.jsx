import React from "react";
import s from "./Loader.module.css";
import loading from "../../../assets/loading.gif";

const Loader = () => {
    return (
        <div className={s.load}>
            <img src={loading} alt="loading..." />
        </div>
    );
};

export default Loader;
