import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Wall.module.css'

export default function Heros() {
    return(
        <div className={styles.wallcontainer}>
            <div className={styles.textcontainer}>
                <h1><center>There are currently no heroes 😔</center></h1>
                <h2><center>Please come back soon!</center></h2>
            </div>
            
        </div>
    )
}