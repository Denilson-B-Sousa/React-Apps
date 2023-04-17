import styles from '../../src/Avatar.module.css'
export function Avatar(props){
    return (
        <img  src={props.src} className={styles.avatar}/>
    )
}