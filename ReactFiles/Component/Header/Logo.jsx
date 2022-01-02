import React from 'react';
import {Link} from 'react-router-dom';
import styles from './css/Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.Logo}>
            <Link to="/HomePage">Street<br/>Comp.</Link>
        </div>

    );
};

export default Logo;