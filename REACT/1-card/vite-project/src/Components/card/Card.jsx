import styles from './Card.module.css'
function Card(){
    return(
        <div className={styles.card}>
            <img src="https://picsum.photos/200" alt="picture" />
            <h2 className={styles.cardTitle}>React Project</h2>
            <p className={styles.cardText}>This is a simple Card component</p>
        </div>
    );
}

export default Card;