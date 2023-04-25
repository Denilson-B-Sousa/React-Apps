
import styles from '../brand.module.css'
import { Brands } from './Brands'

export function Brand(){

    const datas = [
        {
            src: '../src/assets/asus-logo.svg',
            width: '100.77px',
            height: '20px'
        },
        {
            src: '../src/assets/allianz.svg',
            width: '112.46px',
            height: '20px'
        }, 
        {
            src: '../src/assets/chase.svg',
            width: '107.61px',
            height: '20px'
        },
        {
            src: '../src/assets/new-york-times.svg',
            width: '141.96px',
            height: '20px'
        },
        {
            src: '../src/assets/linkedin.svg',
            width: '75.51px',
            height: '20px'
        }
    ]
    return(
        <section className={styles.brandSection}>
            <h3 className={styles.brandTitle}>Featured In  | <strong> Our Certification</strong></h3>
           {datas.map(data => <Brands
                key = {data.src}
                src= {data.src}
                width = {data.width}
                height = {data.height}
            />)}
        </section>
    )
}