import styles from './css/FormInvite.module.css'
import backgroundForm from './image/BackgroundForm.png'

const FormInvite = () => {
    return (
        <section>
            <div className={styles.Title}>
                Заинтересовались в нашем чемпионате?
            </div>
            <div className={styles.FormTitle}
                 style={{background: `url(${backgroundForm})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className={styles.GoogleFormLink}>
                    <a href="/" className={styles.GoogleFormButton}>
                        Подать заявку на участие
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FormInvite;