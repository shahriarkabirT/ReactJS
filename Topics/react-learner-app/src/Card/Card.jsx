import styles from './Card.module.css'
import tasin from '../assets/tasin.png'

function Card(){
    return(
        <div className={ styles.Wrapper }>
            <div className={ styles.card }>
                <img src={ tasin } alt="img" />
                <h3>Shahriar Kabir</h3>
                <p> Software Engineer @CodeElevate </p>
            </div>
        </div>
    );
}

export default Card