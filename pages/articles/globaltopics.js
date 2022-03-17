import styles from "../../styles/ArticleHome.module.css"
import Link from "next/link"
import Image from "next/image"

export default function GlobalTopics() {
    return (
        <div className={styles.cardscontainer}>
                
        <div className={styles.cardmain} id="global">
            <Image src="/russiangascover.png" width={750} height={470} alt="photo of war between Russia and Ukraine" />
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
            <Image src="/congoimagecover.jpg" width={750} height={470} alt="photo of some environmental thing that hasn't been added to the site yet"/>
            <Link href="/articles/congodeforestation" passHref>
            <div className={styles.textcontainer}>
            <p className={styles.imagecredit}>Photo by Matthias Vanmaercke</p>
            <h2 className={styles.articletitle}><center>Deforestation in the Congo</center></h2>
            <p className={styles.articlesummary}><center>Deforestation in the Congo Is Still a Pressing Environmental Issue; How Is the World Responding?</center></p>
            <p><center>Written by Kevin Daniel</center></p>
            </div>
            </Link>
        </div>

        <div className={styles.cardmain} id="local">
            <Image src="/testhawaiiphoto.jpg" width={750} height={470} alt="photo of some environmental thing that hasn't been added to the site yet"/>
            <Link href="/articles/russiangasdependency" passHref>
            <div className={styles.textcontainer}>
            <h2 className={styles.articletitle}><center>Article Two Global</center></h2>
            <p className={styles.articlesummary}><center>Article 3 global short little summary something something something something something something something something something.</center></p>
            <p><center>Written by Aaron Anidjar</center></p>
            </div>
            </Link>
        </div>
       
    </div>
    )
}