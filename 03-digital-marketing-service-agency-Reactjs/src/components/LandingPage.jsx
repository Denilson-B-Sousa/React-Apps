import { ContactUs } from './ContactUs'
import styles from '../LandingPage.module.css'
export function LandingPage(){
    return(
        <section className={styles.container}>
            <div className={styles.heroInfo}>
                <h1 className={styles.heroTitle}>Creative Digital Marketing Agency</h1>
                <p className={styles.heroText}>Ullamco sunt eu commodo dolor dolor voluptate dolore incididunt irure in dolore. Culpa amet magna cillum veniam esse sit incididunt qui tempor elit.</p>
                <ContactUs/>
            </div>
            <div className={styles.heroImage}>
                <img src="../src/assets/CoverImage.svg" alt="Homem branco terno listrado com camisa social branca e gravata azul com ícones de mídia social ao seu redor"/>
            </div>
        </section>
    )
}