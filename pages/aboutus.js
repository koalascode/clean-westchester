import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutUsCard from '../components/aboutuscards'
import styles from '../styles/About.module.css'
import Nav from '../components/navbar'
import LightFooter from '../components/footerlightmode.js'
import MinLightNav from '../components/minimalnavlight'


export default function AboutUs() {
    return(
        <div className={styles.container}>
            <MinLightNav/>
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
                <div className={styles.textcardscontained}>
                    <div>
                        <div className={styles.flexcardcontained}>
                            <Image src="/iconone.png" width={90} height={30} className={styles.iconphoto}/>
                            <h1 className={styles.cardsheader}>Build Healthy Cities</h1>
                        </div>
                        <p className={styles.cardmaintext}>Our plans to clean Westchester are two pronged, clean cities and nature. Cleaning cities is vital, economically and environmentally, and clean cities are just nicer.</p>
                    </div>

                    <div>
                        <div className={styles.flexcardcontained}>
                            <Image src="/icontwo.png" width={90} height={30} className={styles.iconphoto}/>
                            <h1 className={styles.cardsheader}>Protect Land and Water</h1>
                        </div>
                        <p className={styles.cardmaintext}>We&apos;re trying to protect Westchester by cleaning, depolutting, promoting nature, and educating.</p>
                    </div>

                    <div>
                        <div className={styles.flexcardcontained}>
                            <Image src="/iconthree.png" width={90} height={30} className={styles.iconphoto}/>
                            <h1 className={styles.cardsheader}>Depollute Rivers and Lake</h1>
                        </div>
                        <p className={styles.cardmaintext}>Pollution in our rivers and lakes causes large issues, not only to wildlife, but for humans as well. We are working to reduce the amount of plastic waste that works its way into our rivers, lakes, and then our oceans.</p>
                    </div>

                    <div>
                        <div className={styles.flexcardcontained}>
                            <Image src="/iconfour.png" width={90} height={30} className={styles.iconphoto}/>
                            <h1 className={styles.cardsheader}>Clean our Parks</h1>
                        </div>
                        <p className={styles.cardmaintext}>Our parks are riddled with everyday plastic waste, and other polutants. We are working to mitigate the issues that we face in our parks, and promote spending time in the outdoors.</p>
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
                    <Image src="/rickprofilepicture.jpg" width={360} height={600} className={styles.memberimage} alt="Rick Yang Photo Clean Westchester"/>
                    <div className={styles.textcontainer}>
                    <h2 className={styles.membername}>Rick Yang</h2>
                    <p className={styles.membertitle}>Cofounder ♼, COO, Editor-in-Chief 📜, Writer ✍️</p>
                    </div>
                    
                </div>
                <div className={styles.member}>
                    <Image src="/kevindaniels.png" width={360} height={600} className={styles.memberimage} alt="Kevin Daniel Photo Clean Westchester"/>
                    <div className={styles.textcontainer}>
                    <h2 className={styles.membername}>Kevin Daniel</h2>
                    <p className={styles.membertitle}>Editor 📜, Writer ✍️, Dog 🐶</p>
                </div>
                    
                </div>
            </div>
            </div>
          <LightFooter /> 
            </div>
        </div>
    )
}