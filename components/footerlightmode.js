import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/FooterLight.module.css'
import emailjs from 'emailjs-com';


export default function Footer() {
    const handleContact = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const topic = e.target.textareamessage.value

        let templateParams = {
            to_name: 'Clean Westchester',
            from_name: `${name}`,
            from_email: `${email}`,
            message_html: `${topic}`
          };
        
        emailjs.send('service_w1vc585', 'template_hco3bnq', templateParams, 'DLR9gjPJNQpeu41ES')
            .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              console.log("test")
            }, function(error) {
                console.log('FAILED...', error);
                }
            );
          
        e.target.email.style.display = "none"
        e.target.name.style.display = "none"
        e.target.textareamessage.style.display = "none"
        e.target.submit.style.display = "none"

        document.getElementById("thanks").showModal()
    }

   const closeModal = () => {
      document.getElementById("thanks").close()
    }

    return (
        <div className={styles.container}>
            <div className={styles.footerflexbot}>
                <div classname={styles.footsectionone}>
                    <h1 className={styles.foothead}><center>Clean Westchester</center></h1>
                    <p className={styles.footmain}><center>Clean Westchester is a student founded and run organization that focuses on making Westchester a cleaner place for everyone. We are always looking for opportunities to expand and to teach in classes, so please reach out!</center></p>
                    <br />
                    <p className={styles.builtwithlovefooter}><center>Built with ❤️ by Aaron Anidjar<br /> Aaron Anidjar | Rick Yang </center></p>
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
                    </div>
                <div>
                    <h1 className={styles.linksheader}>Links</h1>
                    <Link href="/" passHref>
                        <p className={styles.links}>Home</p>
                    </Link>
                    <Link href="/articles" passHref>
                        <p className={styles.links}>Articles</p>
                    </Link>
                    <Link href="/aboutus" passHref>
                        <p className={styles.links}>About Us</p>
                    </Link>
                    <Link href="/contactus" passHref>
                        <p className={styles.links}>Contact Us</p>
                    </Link>
                    <Link href="/wallofheroes" passHref>
                        <p className={styles.links}>Wall of Heroes</p>
                    </Link>
                </div>
                <div>
                    <h1 className={styles.contactusheader}>Contact Us</h1>
                    <form onSubmit={handleContact}>
                        <input type="email" placeholder="Email Address..." id="email" required className={styles.standardform}/>
                        <br /><br />
                        <input type="text" placeholder='Name...' id="name" required className={styles.standardform}/>
                        <br /><br />
                        <textarea placeholder="Enter your comment, query, or concern..." id="textareamessage" cols="36" rows="5" required className={styles.bigformtextarea}></textarea>
                        <br /><br />
                        <input type="submit" value="Submit" id="submit" className={styles.submitbutton}/>
                        
                    </form>
                    <dialog className={styles.thanks} id="thanks">
                            <button  onClick={closeModal} id="modalclosingbutton" className={styles.modalclosingbutton}>x</button>
                            <h2 classname={styles.modalhead}><em>Thanks for Sending Us a Message</em></h2>
                            <br />
                            <p classname={styles.modalmain}>We'll Get Back to You As Soon as Possibe!</p>
                        </dialog>
                </div>
            </div>
        </div>
    )
}