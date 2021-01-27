import React, { useRef, useEffect } from "react";
import "./Weddings.css"
import WeddingBetter from "../Images/weddingbetter.jpg"
import {TweenMax, Power4} from 'gsap'

function Weddings() {
    let wdgtext = useRef(null)
    let wdgphoto = useRef(null)

    useEffect (() => {
        TweenMax.from(
            wdgtext, 
            1,
            {
              opacity: 0,
              x: +200,
              ease: Power4.easeOut,
              delay: 1.3,
            }
        )
        TweenMax.to(
            wdgtext, 
            1,
            {
              opacity: 1,
              x: 0,
              delay: 1.3,
            }
        )
        TweenMax.from(
            wdgphoto, 
            1,
            {
              opacity: 0,
              x: -200,
              ease: Power4.easeOut,
              delay: 0.7,
            }
        )
        TweenMax.to(
            wdgphoto, 
            1,
            {
              opacity: 1,
              x: 0,
              delay: 0.7,
            }
        )
    })
    return (
        <div>
            <div ref={el => { wdgphoto = el }}>
                <img className="weddingPhoto" src={WeddingBetter} alt="Ivett working with a client" />
            </div>
            <div ref={el => { wdgtext = el }} className="weddingText">
                <p>Now you have purchased your beautiful wedding dress for the big day, it is now time to choose your perfect bridal Hairstyle, that is where we come in.  </p>                                            
                <p>We understand that a perfect wedding demands a special look for you and we can help provide this with an initial consultation right through to the big day. We listen to your dream and help in recreating it in a client focussed manner using premium products and accessories. </p>
                <p>We can complete a bridal hair trial if required. We come in good time to the location on your big day for no extra charge and provide a relaxing experience doing anything that is required to ensure the perfect look for your big day. </p>
                <p>If you have any questions or queries please do not hesitate to contact me and I will be more than happy to assist. </p>
            </div>
        </div>
    )
}

export default Weddings
