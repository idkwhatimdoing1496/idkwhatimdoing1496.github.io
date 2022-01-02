import FooterLogo from "./FooterLogo";
import FooterNavigation from "./FooterNavigation";
import FooterSocialLink from "./FooterSocialLink";
import styles from './css/Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <FooterNavigation/>
                <FooterLogo/>
                <FooterSocialLink/>
            </footer>
            <div className={styles.LicensePlate}> Copyright ©Street Drift Competition | SDC 2022 Все права защищены<br/>
                <a href="https://policies.google.com/terms" className={styles.LicensePlate}>Политика конфиденциальности
                    и Условия использования<br/></a>
                <a href="https://t.me/idkwhatimdoing96" className={styles.LicensePlate}>
                    developed by @idkwhatimdoing
                </a>
            </div>
        </>
    );
};

export default Footer;