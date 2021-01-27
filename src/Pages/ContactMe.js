import React, { useRef, useEffect } from "react";
import "./ContactMe.css"
import car2 from "../Images/car2.jpg"
import {TweenMax, Power4} from 'gsap'


function ContactMe() {
    let ctText = useRef(null)
    let ctSocial = useRef(null)
    let ctSocial1 = useRef(null)
    let ctPhoto = useRef(null)
    let ctNumber = useRef(null)

    useEffect (() => {
        TweenMax.from(
            ctText, 
            1.2,
            {
              opacity: 0,
              delay: 0.2,
            }
        )
        TweenMax.to(
            ctText, 
            1.2,
            {
              opacity: 1,
              delay: 0.2,
            }
        )
        TweenMax.from(
            ctSocial, 
            1.5,
            {
              opacity: 0,
              x: 500,
              ease: Power4.easeOut,
              delay: 3.8,
            }
        )
        TweenMax.to(
            ctSocial, 
            1.5,
            {
              opacity: 1,
              x: 0,
              delay: 3.8,
            }
        )
        TweenMax.from(
            ctSocial1, 
            1.5,
            {
              opacity: 0,
              x: -500,
              delay: 4,
            }
        )
        TweenMax.to(
            ctSocial1, 
            1.5,
            {
              opacity: 1,
              x: 0,
              delay: 4,
            }
        )
        TweenMax.from(
            ctPhoto, 
            1,
            {
              opacity: 0,
              delay: 3.5,
            }
        )
        TweenMax.to(
            ctPhoto, 
            1,
            {
              opacity: 1,
              delay: 3.5,
            }
        )
        TweenMax.from(
            ctNumber, 
            1,
            {
              opacity: 0,
              delay: 4,
            }
        )
        TweenMax.to(
            ctNumber, 
            1,
            {
              opacity: 1,
              delay: 4,
            }
        )
    })

    return (
        <div className="contactAll">
            <div ref={el => { ctText = el }} className="contactIntro">
                <p>I am based in Huntingdon, Cambridgeshire and I cover the surrounding towns and villages including St Ives and St neots. Please do not hesitate to contact me for an informal chat or to book an appointment</p>
            </div>
            <div className="contactContainer">
                <img ref={el => { ctPhoto = el }} className="contactPhoto" src={car2} alt="car with logo" />
            </div>
            <div>
                <div ref={el => { ctNumber = el }} className="contactCard">
                    <p>Yvett:</p>
                    <p>Tel: 07939093755</p>
                    <p>Email: rollinghairdresser@gmail.com</p>
                </div>
                <div className="buttonCardCt">
                    <div ref={el => { ctSocial = el }} className="facebookButtonCt">
                        <a className="buttonPortfolioFBCt" href="https://www.facebook.com/rollinghairdresser/">Facebook</a>
                    </div>
                    <div ref={el => { ctSocial1 = el }} className="instaButtonCt">
                        <a className="buttonPortfolioIGCt" href="https://www.instagram.com/rollinghairdresser/">Instagram</a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
