import Logo from "./Logo";
import Navigation from "./Navigation";
import styles from "./css/Header.module.css";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <Navigation/>
            <MobileNavigation/>
        </header>
    );
};

export default Header;