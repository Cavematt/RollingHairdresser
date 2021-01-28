import React, {useState, useEffect} from 'react'
import Toolbar from './Toolbar'
import MobileBar from './MobileBar'

function Navbar() {
    const [bar, setBar] = useState(false)

    const showBar = () => {
      if(window.innerWidth <= 960) {
        setBar(false)
      } else {
          setBar(true)
      }
    }
  
  
    useEffect(() => {
      showBar()
    }, );
  
    window.addEventListener('resize', showBar)
    
    return (
        <div>
           {bar ? <Toolbar /> : <MobileBar />} 
        </div>
    )
}

export default Navbar
