import { useState } from 'react'
import Link from "next/link"
import styles from "../styles/MinimalLightModeNav.module.css"
import { useEffect } from 'react'
export default function MinLightNav() {
    const [count, setCount] = useState()
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
        count === undefined ? setCount("on") : null ;
        count === "off" ? setCount("on"): null;
       }
       if (menuStatus === "closed") {
        count === "on" ? setCount("off") : null;
       }
    })
    


    return (
        <div className={styles.mainheader}>
        <div className={styles.hamburgercontained}>
         <div className={styles.menubtn} id="menubtn" onClick={toggleMenu}>
            <div className={styles.menubtnburger}></div>
          </div>
        </div>
        {count === "on" ? 
        <div className={styles.mainlinkscontainer}> 
          <Link href="/" passHref>
            <h1 className={styles.sitelinks}>Home</h1>
          </Link>
          <Link href="/aboutus" passHref>
            <h1 className={styles.sitelinks}>About Us</h1>
          </Link>
          <Link href="/articles" passHref>
            <h1 className={styles.sitelinks}>Articles</h1>
          </Link>
          <Link href="/contactus" passHref>
            <h1 className={styles.sitelinks}> Contact Us</h1>
          </Link>
          <Link href="/wallofheroes" passHref>
            <h1 className={styles.sitelinks}>Wall of Heroes</h1>
          </Link>
        </div> : null}
      </div>
    )
}