import React, { useState } from 'react'
import "./MobileBar.css"
import { Link } from 'react-router-dom'
import "./MobileLink"
import { useEffect } from 'react/cjs/react.development'

function MobileBar() {
    const [menu, setMenu] = useState(true)


    const handleMenuoff = () => {setMenu(false)}              

    useEffect (() => {
        if (menu === false) {
            setInterval(function(){ setMenu(true); }, 10000);
            }
        }
    ,)

    return (
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
    )
}

export default MobileBar
