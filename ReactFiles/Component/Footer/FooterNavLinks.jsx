import React from 'react';
import styles from "./css/FooterNavigation.module.css";
import {NavLink} from "react-router-dom";

const FooterNavLinks = () => {
    return (
        <ul className={styles.FooterNavIn}>
            <li className={styles.FooterNavButton}><NavLink to="/1HomePage">Home</NavLink></li>
            <li className={styles.FooterNavButton}><NavLink to="/SeasonPage">Season</NavLink></li>
            <li className={styles.FooterNavButton}><NavLink to="/PhotosPage">Photos</NavLink></li>
            <li className={styles.FooterNavButton}><NavLink to="/ContactPage">Contact</NavLink></li>
        </ul>
    );
};

export default FooterNavLinks;