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
                <h2 className="cardtitle">Bronx River Clean-Up</h2>
                <p className="cardbody">On August 19, 2022, we went to the Bronx River to remove plastic from the River and it&apos;s surroundings. We learning quite a lot from this process.</p>
                <Link href="/articles/1bc0932b-5e8b-4971-85b3-03ad42d77fa1" passHref>
                    <button className="cardbutton">Learn More</button>
                </Link>  
                </div>      
            </div>
            <div className="card-six">
                <div className="card-content-two">
                <h2 className="cardtitle">Mamaroneck Clean-Up</h2>
                <p className="cardbody">In March, we battled through the rain, snow, and cold to do a clean-up in Mamaroneck. It was not the largest, nor the most glamorous, but we fought for every piece of trash.</p>
                <Link href="/articles/b8ce3cc9-b009-49ba-ab4c-27224bbff778" passHref>
                    <button className="cardbutton">Learn More</button>
                </Link>
                </div>      
            </div>
            <div className="card-seven">
                <div className="card-content-three">
                <h2 className="cardtitle">Article Writing</h2>
                <p className="cardbody">We are always writing new articles, not just about the projects we are doing, but large investigations about environmental topics around the world.</p>
                <Link href="/articles" passHref>
                    <button className="cardbutton">Learn More</button>
                </Link>
                </div>      
            </div>
        </div>
  
    )
  }
}

export default AboutUsCard