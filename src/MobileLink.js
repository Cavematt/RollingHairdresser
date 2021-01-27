import React from 'react'
import { Link } from "react-router-dom"
import "./MobileLink.css"

function MobileLink() {

  return (
    <div>
      <nav>
        <li className="mblContainer">
            <ul className="mblCardStart">
                <Link className="mblLink" to="/">Home</Link>
            </ul>
            <ul className="mblCard">
                <Link className="mblLink" to="/AboutMe">About Me</Link>
            </ul>
            <ul className="mblCard">
                <Link className="mblLink" to="/Hairdressing">Mobile Hairdressing</Link>
            </ul>
            <ul className="mblCard">
                <Link className="mblLink" to="/Weddings">Weddings</Link>
            </ul>
            <ul className="mblCard">
                <Link className="mblLink" to="/Portfolio">Portfolio</Link>
            </ul>
            <ul className="mblCard">
                <Link className="mblLink" to="/Contact">Contact Me</Link>
            </ul>
        </li>
      </nav>
    </div>
  );
}

export default MobileLink;
