import NavLinks from "./NavLinks";
import styles from './css/Navigation.module.css'
import {VscMenu} from 'react-icons/vsc';
import {AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);
    const hamburgerIcon = <VscMenu className={styles.Hamburger}
                                   size='40px' color='white'
                                   onClick={() => setOpen(!open)}
    />
    const hamburgerCloseIcon = <AiOutlineClose className={styles.Hamburger}
                                               size='40px' color='black' zIndex='4'
                                               onClick={() => setOpen(!open)}
    />
    const closeMobileNav = () => setOpen(false);

    return (

        <nav className={styles.MobileNav}>
            {open ? hamburgerCloseIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileNav={closeMobileNav}/>}
        </nav>
    );
};

export default MobileNavigation;