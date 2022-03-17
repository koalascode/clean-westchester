import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutUsCard from '../components/aboutuscards'
import styles from '../styles/About.module.css'
import Nav from '../components/navbar'

export default function AboutUs() {
    return(
        <div className={styles.container}>
            <Nav />
            <br />
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
                    <Image src="/aboutusthree.png" width={505} height={194} className={styles.aboutussection} alt=""/>
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
            <div className={styles.pagefour}>
                <h1 className={styles.ourteamheader}><center>Our Team:</center></h1>
            <div className={styles.memberscontainer}>
                <div className={styles.member}>
                    <Image src="/aaroncropped.jpg" width={360} height={600} className={styles.memberimage} alt="Aaron Anidjar Photo Clean Westchester"/>
                    <div className={styles.textcontainer}>
                        <h2 className={styles.membername}>Aaron Anidjar</h2>
                        <p className={styles.membertitle}>Cofounder ♼, CEO, Site Developer ⌨️, Film Maker 🎥</p>
                    </div>
                    
                </div>
                <div className={styles.member}>
                    <Image src="/kevindaniels.png" width={360} height={600} className={styles.memberimage} alt="Rick Yang Photo Clean Westchester"/>
                    <div className={styles.textcontainer}>
                    <h2 className={styles.membername}>Rick Yang</h2>
                    <p className={styles.membertitle}>Cofounder ♼, COO, Writer/Editor 📜</p>
                    </div>
                    
                </div>
                <div className={styles.member}>
                    <Image src="/kevindaniels.png" width={360} height={600} className={styles.memberimage} alt="Kevin Daniel Photo Clean Westchester"/>
                    <div className={styles.textcontainer}>
                    <h2 className={styles.membername}>Kevin Daniel</h2>
                    <p className={styles.membertitle}>Writer ✍️, Editor 📜, Dog 🐶</p>
                </div>
                    
                </div>
            </div>
            </div>
           
            </div>
        </div>
    )
}