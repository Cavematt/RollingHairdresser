import React, { useRef, useEffect } from 'react'
import hairDetail from "../Images/hairdetail.jpg"
import car from "../Images/car.jpg"
import "./MobileHairdressing.css"
import {TweenMax, Power4} from 'gsap'

function MobileHairdressing() {
    let mblPhoto = useRef(null)
    let mblPhoto2 = useRef(null)
    let mblText = useRef(null)

    useEffect(() => {
        TweenMax.from(
            mblPhoto, 
            1,
            {
              opacity: 0,
              x: -200,
              ease: Power4.easeOut,
              delay: 1,
            }
        )
        TweenMax.to(
            mblPhoto, 
            1,
            {
              opacity: 1,
              x: 0,
              delay: 1,
            }
        )
        TweenMax.from(
            mblPhoto2, 
            1,
            {
              opacity: 0,
              x: 200,
              ease: Power4.easeOut,
              delay: 1,
            }
        )
        TweenMax.to(
            mblPhoto2, 
            1,
            {
              opacity: 1,
              x: 0,
              delay: 1,
            }
        )
        TweenMax.from(
            mblText, 
            1,
            {
              opacity: 0,
              y: 200,
              ease: Power4.easeOut,
              delay: 1.5,
            }
        )
        TweenMax.to(
            mblText, 
            1,
            {
              opacity: 1,
              y: 0,
              delay: 1.5,
            }
        )
    })
    return (
        <div>
            <div className="bothSingle">
                <img ref={el => { mblPhoto = el }} className="single" src={hairDetail} alt="hair in detail being dyed" />
                <img ref={el => { mblPhoto2 = el }} className="single" src={car} alt="car with rolling hairdresser logo" />
            </div>
            <div ref={el => { mblText = el }} className="information">
                <div>
                    <p>As a fully qualified hairstylist with over 20 years’ experience, I am able to perform a variety of services including: </p>
                    <ul>
                        <li>Barber</li>
                        <li>Female Hair Styling and Cutting</li>
                        <li>Photoshoot Hair Styling and Cutting</li>
                        <li>Wedding Hair Preparation, Styling and Cutting</li>
                        <li>Kids Hair Styling and Cutting</li>
                    </ul>
                </div>
                <div>
                    <p>I come to you at your convenience and provide a personal service catered to your needs. I am based in Huntingdon, Cambridgeshire but also provide services in St Neots, St Ives and the surrounding towns and villages. </p>
                    <p>My prices offer excellent value for money and I only use premium produces to ensure client satisfaction. For a personalised quotation for either a one off styling session or a regular cut please get in contact.</p>
                </div>
            </div>
        </div>
    )
}

export default MobileHairdressing
