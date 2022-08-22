import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/MinimalLightModeNav.module.css'


export default function NavBar() {
    const [menuStatus, setMenuStatus] = useState()
    const toggleMenu = () => {
        menuStatus === undefined ? setMenuStatus("open") : null;
        menuStatus === "open" ? setMenuStatus("closed") : null;
        menuStatus === "closed" ? setMenuStatus("open") : null;
    }

    useEffect(() => {
        const menuBtn = document.getElementById("menubtn");
        menuStatus === "open" ? menuBtn.classList.add('open') : null;
        menuStatus !== "open" ? menuBtn.classList.remove('open') : null
    })

    useEffect(() => {
       if (menuStatus === "open") {
           document.getElementById("navpopup").style.display = "block"
       }
       if (menuStatus === "closed") {
        document.getElementById("navpopup").style.display = "none" 
       }
    })
    

    return (
        <div className={styles.container}>
        <div className={styles.main}>
        <Link href="/" passHref>
            <h1 className={styles.headername}>Clean Westchester</h1>  
        </Link>
          <div className={styles.flexlinks}>
              <Link href="/aboutus" passHref>
                  <p className={styles.pagelink}>About Us</p>
              </Link>
              <Link href="/articles" passHref>
                  <p className={styles.pagelink}>Articles</p>
              </Link>
              <Link href="/contactus" passHref>
                  <p className={styles.pagelink}>Contact Us</p>
              </Link>
              <Link href="/wallofheroes" passHref>
                  <p className={styles.pagelink}>Wall of Heroes</p>
              </Link>
          </div>
          <div className={styles.menubtn} id="menubtn" onClick={toggleMenu}>
            <div className={styles.menubtnburger}></div>
          </div>
        </div>
          
        
            <div className={styles.navpop} id="navpopup">
            <Link href="/aboutus" passHref>
                  <h1 className={styles.bigpagelink}>About Us</h1>
              </Link>
              <Link href="/articles" passHref>
                  <h1 className={styles.bigpagelink}>Articles</h1>
              </Link>
              <Link href="/contactus" passHref>
                  <h1 className={styles.bigpagelink}>Contact Us</h1>
              </Link>
              <Link href="/wallofheroes" passHref>
                  <h1 className={styles.bigpagelink}>Wall of Heroes</h1>
              </Link>
            </div>
        </div>
    )
}