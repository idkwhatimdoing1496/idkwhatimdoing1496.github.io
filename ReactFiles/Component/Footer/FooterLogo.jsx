import React from 'react';
import styles from "../Footer/css/FooterLogo.module.css";
import {Link} from "react-router-dom";

const FooterLogo = () => {
    return (
        <div className={styles.Logo}>
            <Link to="/HomePage">Street<br/>Comp.</Link>
        </div>
    );
};

export default FooterLogo;