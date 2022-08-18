import React, { Component } from "react";
import ReactDOM from "react-dom";
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

class Card extends Component {
render() {
    return(
        <div className="cardscontainered">
            <div className="card">
                <div className="card-content">
                <h2 className="cardtitle">About Us</h2>
                <p className="cardbody">Created in February of 2022, we are an interconnected community of students across Westchester that seeks to eliminate all sorts of pollution plaguing our local environments.</p>
                <Link href="/aboutus" passHref>
                    <button className="cardbutton">Learn More</button>
                </Link>  
                </div>      
            </div>
            <div className="card-two">
                <div className="card-content-two">
                <h2 className="cardtitle">Articles</h2>
                <p className="cardbody">Ranging from discussions regarding global environmental issues to highlights of volunteer projects, here you can access a list of our articles written by members of our team. </p>
                <Link href="/articles" passHref><button className="cardbutton">Learn More</button></Link>
                </div>      
            </div>
            <div className="card-three">
                <div className="card-content-three">
                <h2 className="cardtitle">Contact Us</h2>
                <p className="cardbody"> Please contact us with any queries or concerns. We are always looking for new chapters and are always interested in talking, so please feel free to shoot us a quick email below!</p>
                <Link href="/contactus" passHref><button className="cardbutton">Learn More</button></Link>
                </div>      
            </div>
            <div className="card-four">
                <div className="card-content-four">
                <h2 className="cardtitle">Wall of Heroes</h2>
                <p className="cardbody">Volunteers deserve recognition. The Wall of Heroes depicts every environmental service, whether it be a beach clean-up or invasive plant management, or any other activities that anyone has engaged in.</p>
                <Link href="/wallofheroes" passHref><button className="cardbutton">Learn More</button></Link>
                </div>      
            </div>
        </div>
  
    )
  }
}

export default Card