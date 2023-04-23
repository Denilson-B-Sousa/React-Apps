import styles from '../../src/Avatar.module.css'
export function Avatar({hasBorder = false, src}){
    return (
        <img  src={src} className={hasBorder ? styles.avatarWithBorder : styles.avatar}/>
    )
}