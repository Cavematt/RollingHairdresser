import React, {useState, useEffect} from 'react'
import Toolbar from './Toolbar'
import MobileBar from './MobileBar'

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
           <Toolbar /> 
        </div>
    )
}

export default Navbar
