//Index files for each will be the homepage since this hopefully shows up as cleanwestchester.org/scarsdale
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Scarsdale.module.css'
import HamNavBar from '../../components/minimalnavbar'

export default function ScarsdaleHomePage() {
    return (
        <div className={styles.container}>
            
            <Head> 
                <title>Scarsdale CEA</title>
                <link rel="icon" href="/greencwlogo.png"/>
                <meta name="description" content="Clean Westchester articles are unbiased and always well researched. Clean Westchester articles are not tied to a certain ideology, but instead try to persue the truth, no matter the outcome." />
            </Head>
            
            <div className={styles.maincontainer}>
                <div className={styles.sectone}>
                    <h1>Scarsdale Community and Environmental Action Club</h1>
                </div>
                <div>
                    <h2>This page has not been created yet, but <b>if you are part of the school government and are currently considering this club, we would very much appreciate it if you accepted the club :)</b></h2>
                    <br />
                    <h3>If that has not convinced you, hopefully this photo of a dog will:</h3>
                    <img className={styles.img} src="/dogphto.png" width={600} height={400}/>
                    <p>This dog shows how happy the Scarsdale community will be when the club is accepted.</p>
                    <Link href="/">
                        <button className={styles.button}>Go to the rest of the site</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}