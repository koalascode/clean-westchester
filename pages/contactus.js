import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contact.module.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";
import MinLightNav from "../components/minimalnavlight";

export default function Contact() {
  const router = useRouter();
  const dataHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.fullname.value;
    const topic = e.target.querytextarea.value;

    console.log(topic);

    let templateParams = {
      to_name: "Clean Westchester",
      from_name: `${name}`,
      from_email: `${email}`,
      message_html: `${topic}`,
    };

    emailjs
      .send(
        "service_w1vc585",
        "template_hco3bnq",
        templateParams,
        "DLR9gjPJNQpeu41ES"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          console.log("test");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    router.push("/thanksforsubmitting");
  };

  //console.log(properties)
  return (
    <div className={styles.contactcontainer}>
     <Head> 
      <title>Clean Westchester | Contact Us</title>
      <link rel="icon" href="/greencwlogo.png"/>
      <meta name="description" content="Clean Westchester is an environmental organization focused on making our community cleaner and more livable for everyone." />
      </Head>
     <br />
      <MinLightNav />
      <div className={styles.secondcontainer}>
        <br />
        <h1 className={styles.header}>
          <center>Contact Us</center>
        </h1>
        <p className={styles.maintext}>
          Please contact us about joining the organization as a participant or a
          charter. Also, we are interested in lecturing at schools or other
          places. Finally, contact us with any queries, concerns, or
          suggestions. Thank you!
        </p>
        <form onSubmit={dataHandler} className={styles.formcontainer}>
          <input
            type="email"
            id="email"
            placeholder="Please enter your email"
            className={styles.formnames}
            required
          />
          <input
            type="text"
            id="fullname"
            placeholder="Please enter your full name"
            className={styles.formnames}
            required
          />
          <textarea
            id="querytextarea"
            placeholder="Please contact us with your query, concern, or suggestion"
            rows="7"
            required
            className={styles.bigformtextarea}
          ></textarea>
          <input type="submit" id="submitter" className={styles.button} />
        </form>
      </div>
    </div>
  );
}
