import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/ArticleTemplate.module.css"

export default function FirstCleanUp() {
    return (
        <div className={styles.noglobalstyles}>
        <div className={styles.container}>    
            <div className={styles.textcontainer}>
                <br />
                <Link href="/articles" passHref>
                    <button className={styles.return}> Return to Articles</button>
                </Link>
                <h1 className={styles.title}>Our First Clean-Up</h1>
                <section>
                <p className={styles.maintext}>On Saturday, March 12th, Clean Westchester had its first clean-up in Mamaroneck and Scarsdale. We cleaned a portion of Mamaroneck Road and Griffin Avenue but got our cleaning cut short by the freezing rain. </p>
                <Image src="/kevinphotocleaningone.jpg" width={670} height={450} className={styles.articlephoto} alt=""/>
                <p>Photo by Aaron Anidjar</p>
                </section>
                
                <section>
                    <h2 className={styles.sectionhead}>Did we pick the wrong day?</h2>
                    <p className={styles.maintext}>We did not pick an ideal day for our clean-up, it was below freezing and pouring for the entirety of the clean-up, but the logic for picking this day was sound. We have found that on Saturdays there is a lot of litter on the ground since people on Fridays go out and throw beer cans, red bulls, and coffees out of their car windows. Hence, on Saturday there is a great deal of litter on the side of the roads.</p>
                    <video  src="/lowresfirstcleanupclip2.mp4" controls className={styles.video}/>
                    <p className={styles.maintext}>We had decent success with our collection, we collected about 2 full bags of trash, which amounted to about 10lbs of plastic waste.</p>
                    <video  src="/lowresfirstcleanupclip.mp4" controls className={styles.video}/>
                    <p className={styles.maintext}>The participants of this clean up were: Aaron Anidjar, Kevin Daniel, and Rick Yang. <br /><br /><br />Future clean-ups will be posted.</p>
                </section>
            </div>
            <br /><br /><br />
        </div>
    </div>
    )
}