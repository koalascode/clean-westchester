import styles from "../../styles/ArticleHome.module.css"
import Link from "next/link"
import Image from "next/image"

export default function OurWork() {
    return (
        <div>
        <div className={styles.cardscontainer}>
            
            <div className={styles.cardmain} id="global">
                <Image src="/rickphotocleaningone.jpg" width={750} height={470} alt="photo of us cleaning Mamaroneck and Scarsdale" />
                <Link href="/articles/cleanupone" passHref>
                <div className={styles.textcontainer}>
                <h2><center>Our First Clean Up!</center></h2>
                <p className={styles.articlesummary}><center>We had our first ever clean up today!</center></p>
                
                <p><center>Written by Aaron Anidjar</center></p>
                </div>
                </Link>
            </div>
           
        </div>
    </div>
    )
}