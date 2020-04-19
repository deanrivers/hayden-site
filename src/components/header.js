import React from 'react'
import logo from '../assets/H10.png'

import Social from './social-media'
import FadeIn from 'react-fade-in'
import About from '../components/about'
import SocialCounter from '../components/social-counter'
import Footer from '../components/footer'
import Brands from '../components/brands'
import VideoHero from './videohero'

let Header = ()=>{

        return([
            // <div id="arrow-container">
            //         <span>>>>>>>></span>
            //     </div>,
            <FadeIn delay={500} className="color">
                <div id="main-header-container">
                        <div id="logo-container">
                            <img id="logo" src={logo} alt="logo" draggable="false"/>
                            {/* <div id="intro-container">
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <h1>NJ's BEST FREESTYLER</h1>
                            </div> */}
                            
                        </div>
                        
                </div>
            </FadeIn>,
            <div id="about-parent-container">
                <VideoHero/>
                
                <SocialCounter/>
                <hr/>
                <Brands/>
                {/* <About/> */}

                
            </div>
            
        ])
}

export default Header