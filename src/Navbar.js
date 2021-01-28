import React, {useState, useEffect} from 'react'
import Toolbar from './Toolbar'
import MobileBar from './MobileBar'
import "./Navbar.css"

function Navbar() {
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
    
    return (
        <div>
           {navigation ? <h1 className="sex">Bimbo</h1> : <h1 className="sex">sexytime</h1>} 
        </div>
    )
}

export default Navbar
