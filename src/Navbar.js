import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Toolbar.css"
import "./MobileBar.css"
import "./Navbar.css"

function Navbar() {
    //below is for screensize
    const [navigation, setNavigation] = useState(false)

    const showBar = () => {
      if(window.innerWidth <= 960) {
        setNavigation(false)
      } else {
          setNavigation(true)
      }
    }
  
  
    useEffect(() => {
      showBar()
    }, []);
  
    window.addEventListener('resize', showBar)

    //below is for mobile navbar

    const [menu, setMenu] = useState(true)


    const handleMenuoff = () => {setMenu(false)}              

    useEffect (() => {
        if (menu === false) {
            setInterval(function(){ setMenu(true); }, 10000);
            }
        }
    , )


    
    return (
        <div>
           {navigation ? 
           <nav className="toolbarAll">
           <div className="toolbarContainer">
           <div >
               <Link className="logo" to="/">Rolling Hairdresser</Link>
           </div>
           <div className="toolbarItem">
               <ul className="links">
                   <li>
                   <div  className="linkItself">
                       <Link className="removeLink" to="/AboutMe">About Me</Link>
                   </div>
                   </li>
               </ul>
               <ul className="links">
                   <li>
                   <div className="linkItself">
                       <Link className="removeLink" to="/Hairdressing">Mobile Hairdressing</Link>
                   </div>
                   </li>
               </ul>
               <ul className="links">
                   <li>
                   <div className="linkItself">
                       <Link className="removeLink" to="/Weddings">Weddings</Link>
                   </div>
                   </li>
               </ul>
               <ul className="links">
                   <li>
                   <div className="linkItself">
                       <Link className="removeLink" to="/Portfolio">Portfolio</Link>
                   </div>
                   </li>
               </ul>
               <ul className="links">
                   <li>
                   <div className="linkItself">
                       <Link className="removeLink" to="/Contact">Contact Me</Link>
                   </div>
                   </li>
               </ul>
           </div>
           </div>
       </nav>
           : 
           <div>
            {menu ? 
            <div className="burger">
                <Link onClick={handleMenuoff} to="/MobileLink">
                <div className="burgerInside"></div>
                <div className="burgerInsideTop"></div>
                </Link>
            </div> 
            : 
            null
            }
            <div className="mblTitle">
                <h1>Rolling Hairdresser</h1>
            </div>
        </div>
           } 
        </div>
    )
}

export default Navbar
