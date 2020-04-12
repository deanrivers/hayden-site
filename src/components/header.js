import React from 'react'
import logo from '../assets/H10.png'

import Social from '../components/social-media'





let Header = ()=>{

        return(
            <div id="main-header-container">
                    <div id="logo-container">
                        <img id="logo" src={logo} alt="logo" draggable="false"/>
                    </div>
            </div>
        )
}

export default Header