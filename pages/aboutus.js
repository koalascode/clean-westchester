import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutUsCard from '../components/aboutuscards'
import styles from '../styles/About.module.css'

export default function AboutUs() {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/" passHref><h2 className={styles.headername}>Clean Westchester</h2></Link>
                <br/><br />
                <Link href="/aboutus" passHref><h3 className={styles.headernav}>About Us</h3></Link>
                <Link href= "/articles" passHref><h3 className={styles.headernav}>Articles</h3></Link>
                <Link href="/contactus" passHref><h3 className={styles.headernav}>Contact Us</h3></Link>
                <Link href="/wallofheroes" passHref><h3 className={styles.headernav}>Wall of Heroes</h3></Link>
            </div>
                <div className={styles.sectionone}>
                        <div className={styles.sectiononeimage}>
                            <Image src="/beeimage.jpg" width={350} height={300} layout="fixed" alt="photo of a bee" className={styles.sectiononeimage}/>
                        </div>
                    
                    <div className={styles.sectiononemaincontainer}>
                        <h3 className={styles.sectiononeus}> WHAT WE DO</h3>
                        <h1 className={styles.sectiononeheader}>We are cleaning <br /> Westchester</h1>
                         <p className={styles.sectiononemain}>Yes, the name does explain the general idea of what we do, but the specifics are important.</p>
                    </div>       
            </div>
            <div className={styles.sectionthree}>
                <br />
            <h2 className={styles.sectiontwomain}><center>What we do for the environment</center></h2>
                <div className={styles.cardscontainer}>
                    <div>
                    <Image src="/aboutusfour.png" width={480} height={202} className={styles.aboutussection} alt=""/>
                    <Image src="/aboutusthree.png" width={480} height={180} className={styles.aboutussection} alt=""/>
                    </div>
                    
                    <div>
                    <Image src="/aboutustwo.png" width={470} height={202} className={styles.aboutussection} alt=""/>
                    <Image src="/aboutusone.png" width={500} height={202} className={styles.aboutussection} alt=""/>
                    </div>
                    
                </div>
                <br />
            </div>
            <div className={styles.pagethree}>
                <br />
                <h3 className={styles.smalltext}><center>Projects we have done</center></h3>
                <h2 className={styles.largetext}><center>We are creating a sustainable <br /> society, for everyone.</center></h2>
                <AboutUsCard />
                <br />
            </div>
            <div>

            </div>
        </div>
    )
}