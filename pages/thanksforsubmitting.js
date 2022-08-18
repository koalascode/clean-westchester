import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Thanks.module.css'

export default function Thanks() {
    return (
        <div className={styles.container}>
            <title>Thanks!</title>
            <div className={styles.section}>
                <h1><center>Thanks for contacting us (unless this is James, then piss off)!</center></h1>
            <Link href="/" passHref> 
                <h2 className={styles.link}><center>Return home</center></h2>
            </Link>
            </div>
           
        </div>
    )
        
       
    }