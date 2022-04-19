import styles from "../../styles/ArticleHome.module.css"
import Link from "next/link"
import Image from "next/image"

export default function GlobalTopics() {
    return (
        <div className={styles.cardscontainer}>
            <div className={styles.cardmain} id="global">
                <Image src="/deforestation.webp" width={750} height={470} alt="photo of us cleaning Mamaroneck and Scarsdale" className={styles.coverimage}/>
                
                <Link href="/articles/environmentalissuesonglobalscale" passHref>
                <div className={styles.textcontainer}>
                <p className={styles.imagecredit}>Photo by Ulet Ifansasti </p>
                <h2><center>Environment Issues on a Global Scale: Now is the Time to Act</center></h2>
                <p className={styles.articlesummary}><center>We have 8 years to prevent the inevitable extinction of humans as a species. By 2030, if no collective international actions are taken towards halting our current global path regarding climate change, experts predict that it will be too late; rates of warming could become irreversible, and environmental repercussions could cause the human race and all biodiversity on Earth to deteriorate progressively.</center></p>
                <p><center>Written by Rick Yang</center></p>
                </div>
                </Link>
                </div>      
        <div className={styles.cardmain} id="global">
            <Image src="/russiangascover.png" width={750} height={470} alt="photo of war between Russia and Ukraine" className={styles.coverimage}/>
            <Link href="/articles/russiangasdependency" passHref>
            <div className={styles.textcontainer}>
            <p className={styles.imagecredit}>Photo by Andrey Rudakov</p>
            <h2 className={styles.articletitle}><center>The issue with Russia, Gas, and Dependancies.</center></h2>
            <p className={styles.articlesummary}><center>The recent war between Russia and Ukraine has shed light on an issue that has long been known, the dependancies we have on gas.</center></p>
            <p><center>Written by Aaron Anidjar</center></p>
            </div>
            </Link>
        </div>
       
        
        <div className={styles.cardmain} id="global">
            <Image src="/congoimagecover.jpg" width={750} height={470} alt="photo of some environmental thing that hasn't been added to the site yet" className={styles.coverimage}/>
            <Link href="/articles/congodeforestation" passHref>
            <div className={styles.textcontainer}>
            <p className={styles.imagecredit}>Photo by Matthias Vanmaercke</p>
            <h2 className={styles.articletitle}><center>Deforestation in the Congo</center></h2>
            <p className={styles.articlesummary}><center>Deforestation in the Congo Is Still a Pressing Environmental Issue; How Is the World Responding?</center></p>
            <p><center>Written by Kevin Daniel</center></p>
            </div>
            </Link>
        </div>
       
    </div>
    )
}