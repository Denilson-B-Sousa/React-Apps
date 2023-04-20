
import styles from '../brand.module.css'

export function Cards(props){
    return(
    <div className={styles.cards}>
        <img src={props.src} width={props.width} height={props.height}/>
    </div>
    )
}
