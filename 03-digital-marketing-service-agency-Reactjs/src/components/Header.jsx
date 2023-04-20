import styles from '../App.module.css';
import { ContactUs } from './ContactUs'


export function Header(){
    return(
        <header className={styles.container}>
            <h1 className={styles.containerTitle}><a href="#" className={styles.menuLink}>Ze<strong>b</strong>ra</a></h1>
            <nav className={styles.navbar}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarListItem}>About Us</li>
                    <li className={styles.navbarListItem}>Services</li>
                    <li className={styles.navbarListItem}>Latest Work</li>
                    <li className={styles.navbarListItem}>Testemonials</li>
                </ul>
            </nav>
            <ContactUs/>
        </header>
    )
}