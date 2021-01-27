import React, { useRef, useEffect } from "react";
import "./Portfolio.css"
import {TweenMax} from 'gsap'

function Portfolio() {
    let prtText = useRef(null)
    let social = useRef(null)
    let social1 = useRef(null)

    useEffect (() => {
        TweenMax.from(
            prtText, 
            2,
            {
              opacity: 0,
              delay: 0.7,
            }
        )
        TweenMax.to(
            prtText, 
            2,
            {
              opacity: 1,
              delay: 0.7,
            }
        )
        TweenMax.from(
            social, 
            3,
            {
              opacity: 0,  
              delay: 3,
            }
        )
        TweenMax.to(
            social, 
            3,
            {
              opacity: 1,  
              delay: 3,
            }
        )
        TweenMax.from(
            social1, 
            3,
            {
              opacity: 0,
              delay: 3.5,
            }
        )
        TweenMax.to(
            social1, 
            3,
            {
              opacity: 1,
              delay: 3.5,
            }
        )
    })
    return (
        <div className="portfolioAll">
            <div ref={el => { prtText = el }} className="portfolioText">
                <p>I like to keep things up to date, for my latest styles please check out my Instagram and Facebook page</p>
            </div>
            <div className="buttonContainer">
            <div ref={el => { social = el }} className="facebookButton">
                <a className="buttonPortfolioFB" href="https://www.facebook.com/rollinghairdresser/">Facebook</a>
            </div>
            <div ref={el => { social1 = el }} className="instaButton">
                <a className="buttonPortfolioIG" href="https://www.instagram.com/rollinghairdresser/">Instagram</a> 
            </div>
            </div>
        </div>
    )
}

export default Portfolio
