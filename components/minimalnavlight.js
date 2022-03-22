import { useState } from 'react'
import Link from "next/link"
import styles from "../styles/MinimalLightModeNav.module.css"

export default function MinLightNav() {
    const [count, setCount] = useState()
    return (
        <div className={styles.mainheader}>
        <div className={styles.hamburgercontained} onClick={() => {
          count === undefined ? setCount("on") : null ;
          count === "on" ? setCount("off") : null;
          count === "off" ? setCount("on"): null;
        }}>
          <div className={styles.scalehamburger}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
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