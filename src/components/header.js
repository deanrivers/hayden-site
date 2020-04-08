import React, { Component } from 'react'
import instagramIcon from '../assets/ig.png'
import tiktokIcon from '../assets/tiktok.png'
import youtubeIcon from '../assets/youtube.png'
import logo from '../assets/logo.svg'


import FadeIn from 'react-fade-in'




class Header extends Component{

    constructor(props){
        super(props)

        this.state = {

        }

    }
    

    render(){
        return(
            <div id="main-header-container">
                    
                    <div id="logo-container">
                        <img id="logo" src={logo} alt="logo" draggable="false"/>
                    </div>
                    
                    <div id="social-media-container">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hay10en/">
                            <img className="social-media-icons" src={instagramIcon} alt="ig"/>
                        </a>
                                                        
                        <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@hay10en?lang=en">
                            <img className="social-media-icons" src={tiktokIcon} alt="tiktok"/>
                        </a>
                        
                        
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=JbMm_bIrQGA&feature=youtu.be">
                            <img className="social-media-icons" src={youtubeIcon} alt="yt"/>
                        </a>
                    </div>
            </div>  
            
        )
    }
    
}

export default Header