import React, { useRef, useEffect } from "react";
import ivett from "../Images/ivett.jpg"
import "./FrontPage.css"
import {TweenMax, Power4} from 'gsap'


function FrontPage() {
    let text = useRef(null)
    let photo = useRef(null)

    useEffect (() => {
        TweenMax.from(
            text, 
            1,
            {
              x: -100,
              delay: 2.5,
              opacity: 0,
            }
        )
        TweenMax.to(
            text, 
            1,
            {
              opacity: 1,
              x: 0,
              ease: Power4.easeOut,
              delay: 2.5,
            }
        )
        TweenMax.from(
            photo, 
            1,
            {
              opacity: 0,
              x: 200,
              delay: 0.7,
            }
        )
        TweenMax.to(
            photo, 
            1,
            {
              opacity: 1,
              x: 0,
              ease: Power4.easeOut,
              delay: 0.7,
            }
        )
    })
    return (
        <div>
            <div className="bimbo">
                <div ref={el => { text = el }} className="frontText">
                    <p>My name is Yvett and I am The Rolling Hairdresser from Godmanchester.
We all need to be treated and pampered from time to time, even our hair and scalps. Where else would be more relaxing than in your own home's sanctuary? All the treatment is tailored to meet your requirements, whether it is a new hair style for chemically stressed hair, a dry itchy scalp or you just need a relaxing head massage and light conditioning treatment whilst resting in your chair. I also conduct consultations on demand. As well as colour, perm, restyle and puts up for any occasion in Huntingdon, St Ives, St Neots and surrounding villages.</p>
                    <div>
                        <a  className="covidButton" href="/covid">Covid-19 Service Updates</a>
                    </div>
                </div>
                <div>
                    <img ref={el => { photo = el }} className="frontPhoto" alt="Ivett cutting hair" src={ivett} />
                </div>
            </div>
        </div>
    )
}

export default FrontPage
