
import styles from '../brand.module.css'
import { BrandsCard } from './BrandsCard'

export function Brand(){
    return(
        <section className={styles.brandSection}>
            <h3 className={styles.brandTitle}>Featured In  | <strong> Our Certification</strong></h3>
            <BrandsCard/>
        </section>
    )
}