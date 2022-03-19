import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/ArticleHome.module.css'
import Nav from '../../components/navbar'
import LocalTopics from './localtopics'
import GlobalTopics from './globaltopics'
import OurWork from './ourwork'
import { useState } from 'react'

export default function ArticleHome() {
    const [count, setCount] = useState()

    const noFeaturedDisplay = (e) => {
        document.getElementById("featured").style.display = "none"
    }
    return(
        <div className={styles.container}>
            <Nav />
            <div className={styles.sectionone}>
                <h1 className={styles.header}><center>Featured Articles</center></h1>
                <p className={styles.aboutarticles}><center>As well as cleaning up Westchester, we are a resource for environmental issues across the world with our newsletter and articles. Here is our latest!</center></p>
            </div>
            <div className={styles.localglobalbuttons}>
                <button className={styles.filterbutton} onClick={() => setCount("local")}>Local Topics</button>
                <button className={styles.filterbutton} onClick={() => setCount("global")}>Global Topics</button>
                <button className={styles.filterbutton} onClick={() => setCount("us")}>Our Work</button>
            </div>
            {count === "local" ? <LocalTopics /> : console.log("noinfo")}
            {count === "local" ? noFeaturedDisplay() : console.log("noinfo")}
            {count === "global" ? <GlobalTopics /> : console.log("noinfo")}
            {count === "global" ? noFeaturedDisplay() : console.log("noinfo")}
            {count === "us" ? <OurWork /> : console.log("noinfo")}
            {count === "us" ? noFeaturedDisplay() : console.log("noinfo")}
            <br /><br />
            <div className={styles.cardscontainer} id="featured">
                
                <div className={styles.cardmain} id="global">
                    <Image src="/russiangascover.png" width={750} height={470} alt="photo of war between Russia and Ukraine" />
                    <Link href="/articles/russiangasdependency" passHref>
                    <div className={styles.textcontainer}>
                    <p className={styles.imagecredit}>Photo by Andrey Rudakov</p>
                    <h2><center>The issue with Russia, Gas, and Dependancies.</center></h2>
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
                    <h2><center>Deforestation in the Congo</center></h2>
                    <p className={styles.articlesummary}><center>Deforestation in the Congo Is Still a Pressing Environmental Issue; How Is the World Responding?</center></p>
                    <p><center>Written by Kevin Daniel</center></p>
                    </div>
                    </Link>
                </div>

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