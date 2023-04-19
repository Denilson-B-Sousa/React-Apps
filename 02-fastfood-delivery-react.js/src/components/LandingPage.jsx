import styles from '../../src/LandingPage.module.css'

export function LandingPage(){
    return(
        <div className={styles.container}>
            <section >
                <div className={styles.heroHeading}>
                    <h1 className={styles.mainHeading}>Fast</h1>
                    <h2 className={styles.secondaryHeading}>Food<br/>Delivery</h2>
                </div>
                    <div className={styles.heroText}>
                        <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium </p>
                        <button className={styles.heroButton}>Order Now</button>
                        <a href="#" className={styles.link}><img src="../../src/assets/play.svg" className={styles.img}/> Watch Video</a>
                    </div>
               
              
            </section>
            <section className={styles.imageSection}>
                <img src="../../src/assets/FastFood-image.svg" />
            </section>
        </div>
    )
}