import React from 'react'
import logo from '../assets/H10.png'

import Social from '../components/social-media'
import FadeIn from 'react-fade-in'

let Header = ()=>{

        return(
            <FadeIn delay={500} className="color">

            
                <div id="main-header-container">
                        <div id="logo-container">
                            <img id="logo" src={logo} alt="logo" draggable="false"/>
                        </div>
                </div>
            </FadeIn>
        )
}

export default Header