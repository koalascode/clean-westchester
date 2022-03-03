import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/Home.module.css'
import Globe from './globe.js'
import Card from './cards.js'
import { React } from 'react'
//import Button from 'react-bootstrap/Button'; //npm install later so you can steal the citadel button to show people that they can scroll down
//Add to head: <Link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
export default function Home() {
  return (
    <div className={styles.container} >
      <Head> 
      <title>Clean Westchester</title>
      </Head>
      
      <header>

      </header>
      <br />
      <br />
      
      <div className={styles.sectionone}>
        
        <Globe className={styles.globe} />
        
      </div>
      
        <h3 className={styles.frontheader}>First Environmental Fact</h3>
        <p className={styles.fronttext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p> 
        <div>
        <Link href='#sectiontwo' passHref><p>(next)</p></Link>
        </div>
        
        <div className={styles.transparent}>

        </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
     <div className={styles.sectiontwo} id="sectiontwo"> 
     <br /><br />
      <article>
        <p className={styles.sectiontwotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      </article>
      <br /><br />
     </div>
     <div className={styles.sectionthree}>
       <br />
        <Card className={styles.card}/> 
      <br /><br />
     </div>
     <footer>
      <p className={styles.footertext}><center>Built with ❤️ <br /> Aaron Anidjar | Rick Yang</center></p>
      <div className={styles.sitescontainer}>
        <a href="https://github.com/koalascode" target="_blank" rel="noreferrer">
          <Image className={styles.siteslink} src="/githublogo.png" width={30} height={30} alt="github logo"/>
        </a>
        <a href="https://www.youtube.com/channel/UCWXDVtw6EhVyX-2zL0KmtKw" target="_blank" rel="noreferrer">
          <Image className={styles.siteslink} src="/ytlogo.png" width={30} height={30} alt="youtube logo"/>
        </a>
        <a href="mailto:cleanwestchester@gmail.com">
         <Image className={styles.siteslink} src="/gmaillogo.png" width={50} height={30} alt="gmail logo"/>
        </a>
      </div>
     </footer>



    </div>
  )
}