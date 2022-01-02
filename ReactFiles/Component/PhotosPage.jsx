import styles from "./Photo.module.css";
import photo1 from './Sections/PhotosItems/image/photo1.jpg';
import photo2 from './Sections/PhotosItems/image/photo2.jpg';
import photo3 from './Sections/PhotosItems/image/photo3.jpg';
import photo4 from './Sections/PhotosItems/image/photo4.jpg';
import photo5 from './Sections/PhotosItems/image/photo5.jpg';
import photo6 from './Sections/PhotosItems/image/photo6.jpg';

const Photo = [
    {id: 1, photo: photo1},
    {id: 2, photo: photo2},
    {id: 3, photo: photo3},
    {id: 4, photo: photo4},
    {id: 5, photo: photo5},
    {id: 6, photo: photo6},
]
let Photos = Photo.map(function (props) {
    return (
        <div className={styles.ContainerItem}>
            <div className={styles.SeasonName} key={props.id}>
                <img src={props.photo} alt={props.id}/>
            </div>
        </div>
    );
})
const PhotosItems = () => {
    return (<section className={styles.PhotosPage}>
            {Photos}
        </section>

    );
};

export default PhotosItems;