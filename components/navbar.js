import styles from "../styles/Nav.module.css"
import Link from "next/link"

export default function Nav() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.itemscontainer}>
                <h1 className={styles.header}>Clean Westchester</h1>
                <div className={styles.menu} id="menu">
                    <Link href="/" passHref>
                        <a className={styles.menutext}>Home</a>
                    </Link>
                    <Link href="/aboutus" passHref>
                        <a className={styles.menutext}>About</a>
                    </Link>
                    <Link href="/articles" passHref>
                        <a className={styles.menutext}>Articles</a>
                    </Link>
                    <Link href="/contactus" passHref>
                        <a className={styles.menutext}>Contact</a>
                    </Link>
                </div>
                </div>
            </nav>
           
        </div>
    )
}