import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Globe from './globe.js'
import Card from './cards.js'
import Link from 'next/link'
import NightGlobe from './nightglobe.js'
import Nav from './navbar.js'
import Footer from './footer.js'
import { useState } from 'react'
import HamNavBar from './minimalnavbar.js'
import Countdown from './countdown.js'

export default function FirefoxHome() {
  const [count, setCount] = useState()
  return (
    <div className={styles.container} >
      <Head> 
      <title>Clean Westchester</title>
      <link rel="icon" href="/greencwlogo.png"/>
      <meta name="description" content="Clean Westchester is an environmental organization focused on making our community cleaner and more livable for everyone." />
      </Head>
      
      <header>

      </header>
     

      <div className={styles.sectionone}> 
     
      <HamNavBar />
      <br />
      <br />

      <br />
      {
        new Date().getHours().toString() > 21 || new Date().getHours().toString() <= 5 ? <div className={styles.globecontainer}><NightGlobe className={styles.globe}/></div> : <div className={styles.globecontainer}><Globe className={styles.globe}/></div>
      }
        
        <h3 className={styles.frontheader}>The world, as we know it, is endangered</h3>
        <p className={styles.fronttext}>There are many conflicting studies about how much time we have left to take large climate action, but there is one thing that everyone agrees on: <b>we need to act fast.</b></p> 
        <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
     <div className={styles.sectiontwo}> 
     <br /><br />
      <article>
        <p className={styles.sectiontwotext}>We at Clean Westchester are taking action, not with theoreticals, cheap talk, or meaningless fundraisers, but with actual boots on the ground action and unbiased research.</p>
      </article>
      
      <br /><br />
     </div>
     <div className={styles.wildwest}>
      <div>
        <Image src="/rickphotocleaningone.jpg" width={580} height={400} className={styles.sideimage}/>
      </div>
      <div>
        <h1 className={styles.sideimagetexthead}>What we <b className={styles.accentedtext}>are Doing</b> 🌳</h1>
        <p className={styles.sideimagetextmain}>Our main goal is to make Westchester a cleaner place for everyone, and the way that we approach that is multifaceted, with approaches such as clean ups and informative articles surrounding pressing environmental issues.</p>
        <Link href="/aboutus" passHref>
          <button className={styles.button}>Learn More</button>
        </Link>
       
      </div>
    </div>
     <div className={styles.sectionthree}>
       <br />
        <Card className={styles.card}/> 
      <br /><br />
     </div>
     <div className={styles.wildwest}>
     
     <div>
       <h1 className={styles.sideimagetexthead}>Join us as <b className={styles.accentedtext}>a Chapter!</b> 📚</h1>
       <p className={styles.sideimagetextmain}>We are intrested in expanding our efforts into more districts, if you are intrested in founding a chapter in your school district please contact us!</p>
       <Link href="/contactus" passHref>
         <button className={styles.button}>Contact Us</button>
       </Link>
      
     </div>
     <div>
       <Image src="/beeimage.jpg" width={400} height={300} className={styles.sideimage}/>
     </div>
   </div>
     <Footer />



    </div>
  )
}