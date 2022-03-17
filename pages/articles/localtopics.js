import styles from "../../styles/ArticleHome.module.css"
import Link from "next/link"
import Image from "next/image"

export default function LocalTopics() {
    return (
        <div>
            <div className={styles.cardscontainer}>
                <div className={styles.cardmain} id="global">
                    <Image src="/testhawaiiphoto.jpg" width={750} height={470} alt="photo of war between Russia and Ukraine" />
                    <Link href="/articles/russiangasdependency" passHref>
                    <div className={styles.textcontainer}>
                    <h2><center>Local Topic</center></h2>
                    <p className={styles.articlesummary}><center>The recent war between Russia and Ukraine has shed light on an issue that has long been known, the dependancies we have on gas.</center></p>
                    <p><center>Written by Aaron Anidjar</center></p>
                    </div>
                    </Link>
                </div>
               
                
                <div className={styles.cardmain} id="global">
                    <Image src="/testhawaiiphoto.jpg" width={750} height={470} alt="photo of some environmental thing that hasn't been added to the site yet"/>
                    <Link href="/articles/russiangasdependency" passHref>
                    <div className={styles.textcontainer}>
                    <h2><center>Article Three</center></h2>
                    <p className={styles.articlesummary}><center>Article 2 short little summary something something something something something something something something something.</center></p>
                    <p><center>Written by Aaron Anidjar</center></p>
                    </div>
                    </Link>
                </div>

                <div className={styles.cardmain} id="local">
                    <Image src="/testhawaiiphoto.jpg" width={750} height={470} alt="photo of some environmental thing that hasn't been added to the site yet"/>
                    <Link href="/articles/russiangasdependency" passHref>
                    <div className={styles.textcontainer}>
                    <h2><center>Article Three Local</center></h2>
                    <p className={styles.articlesummary}><center>Article 3 short little summary something something something something something something something something something.</center></p>
                    <p><center>Written by Aaron Anidjar</center></p>
                    </div>
                    </Link>
                </div>
               
            </div>
        </div>
    )
}