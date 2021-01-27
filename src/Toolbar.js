import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Toolbar.css"
import {TweenMax, Power4} from 'gsap'

function Toolbar() {
    let logoI = useRef(null)
    let link1 = useRef(null)
    let link2 = useRef(null)
    let link3 = useRef(null)
    let link4 = useRef(null)
    let link5 = useRef(null)

    useEffect (() => {
        TweenMax.from(
            logoI, 
            1,
            {
              opacity: 0,
              y: -200,
              ease: Power4.easeOut,
              delay: 0.7,
            }
        )
        TweenMax.from(
            link1, 
            1,
            {
              opacity: 0,
              y: -200,
              ease: Power4.easeOut,
              delay: 2.8,
            }
        )
        TweenMax.from(
            link2, 
            1,
            {
              opacity: 0,
              y: -200,
              ease: Power4.easeOut,
              delay: 3,
            }
        )
        TweenMax.from(
            link3, 
            1,
            {
              opacity: 0,
              y: -200,
              ease: Power4.easeOut,
              delay: 3.2,
            }
        )
        TweenMax.from(
            link4, 
            1,
            {
              opacity: 0,
              y: -200,
              ease: Power4.easeOut,
              delay: 3.4,
            }
        )
        TweenMax.from(
            link5, 
            1,
            {
              opacity: 0,
              y: -200,
              ease: Power4.easeOut,
              delay: 3.6,
            }
        )
    })

    return (
        <nav className="toolbarAll">
            <div className="toolbarContainer">
            <div ref={el => { logoI = el }}>
                <Link className="logo" to="/">Rolling Hairdresser</Link>
            </div>
            <div className="toolbarItem">
                <ul className="links">
                    <li>
                    <div ref={el => { link1 = el }} className="linkItself">
                        <Link className="removeLink" to="/AboutMe">About Me</Link>
                    </div>
                    </li>
                </ul>
                <ul className="links">
                    <li>
                    <div ref={el => { link2 = el }} className="linkItself">
                        <Link className="removeLink" to="/Hairdressing">Mobile Hairdressing</Link>
                    </div>
                    </li>
                </ul>
                <ul className="links">
                    <li>
                    <div ref={el => { link3 = el }} className="linkItself">
                        <Link className="removeLink" to="/Weddings">Weddings</Link>
                    </div>
                    </li>
                </ul>
                <ul className="links">
                    <li>
                    <div ref={el => { link4 = el }} className="linkItself">
                        <Link className="removeLink" to="/Portfolio">Portfolio</Link>
                    </div>
                    </li>
                </ul>
                <ul className="links">
                    <li>
                    <div ref={el => { link5 = el }} className="linkItself">
                        <Link className="removeLink" to="/Contact">Contact Me</Link>
                    </div>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Toolbar
