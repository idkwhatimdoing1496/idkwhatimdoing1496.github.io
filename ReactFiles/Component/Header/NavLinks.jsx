import React from 'react';
import styles from "./css/Navigation.module.css";
import {NavLink} from "react-router-dom";

const NavLinks = (props) => {
    return (
        <ul className={styles.NavIn}>
            <li className={styles.NavButton} onClick={() => props.isMobile && props.closeMobileNav()}>
                <NavLink to="/HomePage">Home</NavLink>
            </li>
            <li className={styles.NavButton} onClick={() => props.isMobile && props.closeMobileNav()}>
                <NavLink to="/SeasonPage">Season</NavLink></li>
            <li className={styles.NavButton} onClick={() => props.isMobile && props.closeMobileNav()}>
                <NavLink to="/PhotosPage">Photos
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;