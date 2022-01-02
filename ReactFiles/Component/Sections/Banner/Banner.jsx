import background from './image/background.png'
import styles from './css/Banner.module.css'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}} className={styles.Banner}>
            <div className={styles.BannerText}>
                Official Drift Competition on
                <div className={styles.red}>
                    Assetto Corsa
                </div>
            </div>
        </div>
    );
};

export default Banner;