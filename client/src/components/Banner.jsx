import React from 'react'
import { Link } from 'react-router-dom'
import randBlurb from '../assets/images/rand.png'
import usdBlurb from '../assets/images/usd.png'
import kwachaBlurb from '../assets/images/kwacha.png'
import bondBlurb from '../assets/images/zwl.png'
import pulaBlurb from '../assets/images/pula.png'
import bgImg from "../assets/images/Background-for-Web.jpg"


function Banner() {
    return (
        <div className="home-banner">
            <img src={bgImg} alt="background" className="banner-background"/> 
            <div className="blurb-container">
                <div className="row container mx-auto">
                    <div className="col">
                        <Link to="/">
                            <img className="heartbeat-1" src={randBlurb} alt="rand" />
                        </Link>
                     </div>
                     <div className="col">
                        <Link to="/">
                            <img className="heartbeat-2" src={kwachaBlurb} alt="kwacha" />
                        </Link>
                     </div>
                     <div className="col">
                        <Link to="/">
                            <img className="heartbeat-3" src={usdBlurb} alt="usd" />
                        </Link>
                     </div>
                     <div className="col">
                        <Link to="/">
                            <img className="heartbeat-4" src={bondBlurb} alt="bond" />
                        </Link>
                     </div>
                     <div className="col">
                        <Link to="/">
                            <img className="heartbeat-5" src={pulaBlurb} alt="pula" />
                        </Link>
                     </div>
                     
                </div>

            </div>

            <div className="banner-text">
                <h1>Exchange Rate Converter</h1>
                <Link to="/api">Check API</Link>
            </div>
            
        </div>
    )
}

export default Banner
