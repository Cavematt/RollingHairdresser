import React, { useRef, useEffect } from 'react'
import "./AboutMe.css"
import Ivettclient from "../Images/Ivettclient.jpg"
import {TweenMax, Power4} from 'gsap'

function AboutMe() {
    let posPhoto = useRef(null)
    let posText = useRef(null)

    useEffect(() => {
        TweenMax.from(
            posPhoto, 
            1,
            {
              opacity: 0,
              x: -200,
              ease: Power4.easeOut,
              delay: 1,
            }
        )
        TweenMax.to(
            posPhoto, 
            1,
            {
              opacity: 1,
              x: 0,
              delay: 1,
            }
        )
        TweenMax.from(
            posText, 
            1,
            {
              opacity: 0,
              x: 200,
              ease: Power4.easeOut,
              delay: 0.7,
            }
        )
        TweenMax.to(
            posText, 
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
            <div>
                <img ref={el => { posPhoto = el }} className="positionPhoto" src={Ivettclient} alt="Ivett working with a client" />
            </div>
            <div ref={el => { posText = el }} className="allText">
                <div className="mainText">
                    <p>From as long ago as I can remember I was always in my mum's hair salon and I learnt everything from her. I worked in her salon until I moved to the area in 2012. I am a fully qualified barber and hairstylist. Therefore I can work with men’s, women’s and children’s hair.
                    Having a young son and daughter I feel very connected to children and I know how challenging they can be especially at young age. If you are looking for an experienced friendly hairdresser with over 18 years’ experience then please do not hesitate to get in touch with me through telephone, email or facebook.
                    </p>
                </div>
                <div className="mainText">
                    <p>I Look forward to speaking with you soon,</p>
                </div>
                <div className="signature">
                    <p>Ivett Hadik</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

