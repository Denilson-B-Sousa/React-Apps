import styles from '../../src/App.module.css'
export function Navbar(){
    return(
        <div>
            <ul className={styles.navbarList}>
                <li className={styles.navbarListItem}>Home</li>
                <li className={styles.navbarListItem}>Menu</li>
                <li className={styles.navbarListItem}>Contact</li>
                <li className={styles.navbarListItem}>Shop</li>
            </ul>
        </div>
    )
}