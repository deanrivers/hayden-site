import React from 'react'
import instagramIcon from '../assets/ig.png'
import tiktokIcon from '../assets/tiktok.png'
import youtubeIcon from '../assets/youtube.png'
import logo from '../assets/logo.png'


let Header = () =>{
    return(
        <div id="main-header-container">
            <div id="logo-container">
                <img id="logo" src={logo}/>
            </div>
            <div id="social-media-container">
                <img className="social-media-icons" src={instagramIcon}/>
                <img className="social-media-icons" src={tiktokIcon}/>
                <img className="social-media-icons" src={youtubeIcon}/>
            </div>
            <div id="blue-navbar">
                <div id="see-more-container">
                    <a href="#video-section-container">
                        <p id="see-more-text">see more ></p>
                    </a>
                </div>
            </div>
        </div>  
    )
}

export default Header