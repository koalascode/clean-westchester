import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Contact.module.css'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from "next/router"

export default function Contact() {
    const router = useRouter()
    const dataHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.fullname.value
        const topic = e.target.query.value
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
            router.push("/thanksforsubmitting")
        }

    //console.log(properties)
    return(
        <div className={styles.contactcontainer}>
            <div className={styles.secondcontainer}>
                <br />
                <h1 className={styles.header}><center>Contact Us</center></h1>
                <p className={styles.maintext}><center>Please contact us about joining the organization as a participant or a charter. Also, we are interested in lecturing at schools or other places. Finally, contact us with any queries, concerns, or suggestions. Thank you!</center></p>
                <form onSubmit={dataHandler} className={styles.formcontainer}>
                    <input type="email" id="email" placeholder='Please enter your email' className={styles.formnames} required/>
                    <input type="text" id="fullname" placeholder='Please enter your full name' className={styles.formnames} required/>
                    <input type="textarea" id="query" placeholder="Please contact us with your query, concern, or suggestion" className={styles.formmain} required></input>
                    <input type="submit" id="submitter"/>
                </form>
            </div>
        </div>
     )
    }