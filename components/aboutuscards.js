import React, { Component } from "react";
import ReactDOM from "react-dom";
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

class AboutUsCard extends Component {
render() {
    return(
        <div className="cardscontainered">
            <div className="card-five">
                <div className="card-content">
                <h2 className="cardtitle">Project #1</h2>
                <p className="cardbody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem facilis. Something something something something something something.</p>
                <Link href="/" passHref>
                    <button className="cardbutton">Learn More</button>
                </Link>  
                </div>      
            </div>
            <div className="card-six">
                <div className="card-content-two">
                <h2 className="cardtitle">Project #2</h2>
                <p className="cardbody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem facilis. Something something something something something something.</p>
                <Link href="/" passHref><button className="cardbutton">Learn More</button></Link>
                </div>      
            </div>
            <div className="card-seven">
                <div className="card-content-three">
                <h2 className="cardtitle">Project #3</h2>
                <p className="cardbody">Please contact us with any queries or concerns. We are always looking for new chapters and are always intrested in talking! Something something</p>
                <Link href="/" passHref><button className="cardbutton">Learn More</button></Link>
                </div>      
            </div>
        </div>
  
    )
  }
}

export default AboutUsCard