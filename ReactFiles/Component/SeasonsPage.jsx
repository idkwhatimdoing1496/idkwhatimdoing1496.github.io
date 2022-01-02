import SeasonList from "./Sections/SeasonsItems/Seasons"
import styles from './SeasonPage.module.css'

const SeasonsPage = () => {
    return (
        <section className={styles.SeasonsPage}>
            <div className={styles.SeasonsListTitle}>
                Сезоны
                <div className={styles.SeasonsListDesc}>
                    Информация о каждом этапе каждого сезона
                </div>
                <SeasonList/>
            </div>
        </section>
    );
};

export default SeasonsPage;