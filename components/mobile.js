import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/Home.module.css'
import Globe from './globe.js'
import Card from './cards.js'
import NightGlobe from './nightglobe.js'
import { React } from 'react'
import Nav from './navbar.js'
import Footer from './footer.js'
import HamNavBar from './minimalnavbar.js'
//import Button from 'react-bootstrap/Button'; //npm install later so you can steal the citadel button to show people that they can scroll down
//Add to head: <Link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

//Only difference is styling
export default function Mobile() {
  return (
    <div className={styles.container} >
      <Head> 
      <title>Clean Westchester</title>
      </Head>
      
      <header>

      </header>
      <br />
     
      
      
      
      <div className={styles.sectionone}>
      <HamNavBar />
            
      {
        new Date().getHours().toString() > 21 ? <NightGlobe className={styles.globe}/> : <Globe className={styles.globe}/>
      }
        
      </div>
       
        <h3 className={styles.frontheader}>The world, as we know it, is endangered</h3>
        <p className={styles.fronttext}>There are many conflicting studies about how much time we have left to take large climate action, but there is one thing that everyone agrees on: <b>we need to act fast.</b></p> 
        
        <div className={styles.transparent}>

        </div>
      <br /><br /> <br /><br /><br />
     <div className={styles.sectiontwo} id="sectiontwo"> 
     <br /><br />
      <article>
        <p className={styles.sectiontwotext}>We at Clean Westchester are taking action, not with theoreticals, cheap talk, or meaningless fundraisers, but with actual boots on the ground action.</p>
      </article>
      <br /><br />
     </div>
     <div className={styles.sectionthree}>
       <br />
        <Card className={styles.card}/> 
      <br /><br />
     </div>
     <div className={styles.sectionfour}>
       <div>
          <h2 className={styles.sectionfourheader}><center>Join us as a chapter!</center></h2>
          <p><center className={styles.sectionfourmain}>We are intrested in expanding our efforts into more districts, if you are intrested in founding a chapter in your school district please contact us!</center></p>
          <Link href="/contactus" passHref>
            <button className={styles.button}>Contact Us!</button>
          </Link>
        </div>
        <div>
          <Image className={styles.sectionfourimage} src="/beeimage.jpg" width={400} height={300} alt="image of our work cleaning"/>
        </div>
       
      
     </div>
      <Footer />

    </div>
  )
}