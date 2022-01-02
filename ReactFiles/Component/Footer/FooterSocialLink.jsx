import styles from './css/FooterSocialLink.module.css'

const FooterSocialLink = () => {
    return (
        <div>
            <ul className={styles.FooterSocialLink}>
                <li className={styles.NavButtonSocialLink}><a href="/" className="fab fa-vk"/></li>
                <li className={styles.NavButtonSocialLink}><a href="/" className="fab fa-youtube"/></li>
                <li className={styles.NavButtonSocialLink}><a href="/" className="fab fa-telegram"/></li>
                <li className={styles.NavButtonSocialLink}><a href="/" className="fab fa-instagram"/></li>
            </ul>
        </div>
    );
};

export default FooterSocialLink;