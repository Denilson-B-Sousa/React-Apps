
import styles from '../brand.module.css'

export function Brands(props){
    return(
    <div className={styles.brands}>
        <img src={props.src} width={props.width} height={props.height}/>
    </div>
    )
}
