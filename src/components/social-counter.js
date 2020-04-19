import React from 'react'
import igWhite from '../assets/ig_blue.png'
import tiktokWhite from '../assets/tiktok_blue.png'
import ytWhite from '../assets/youtube_blue.png'
import CountUp from 'react-countup'
import FadeIn from 'react-fade-in'


let SocialCounter = () =>{

    var settings = {
        delay:100
    }
    return([
        
        <div id="social-container">
            {/* <div id="counter-header"><h1>Socials.</h1></div> */}
            <div id="counter-container">
                

                    
                    <div className="counter-children">
                        <a href="https://www.instagram.com/hay10en/">
                            <img src={igWhite} alt="ig-white"/>
                        </a>
                        <CountUp end={7.5} duration={10} suffix="k followers" decimals={1}/>
                        <button className="visit-button">Visit</button>
                    </div>
                    
                    <div id="community-container">
                        <FadeIn {...settings}>
                            <h1>COMMUNITY</h1>
                            <br/>
                            <hr/>
                            <br/>
                            <p>VISIT & FOLLOW!</p>
                        </FadeIn>
                    </div>
                
                    <div className="counter-children">
                        <a href="https://www.tiktok.com/@hay10en?lang=en"> 
                            <img src={tiktokWhite} alt="tiktok-white"/>
                        </a>
                        <CountUp end={249.6} duration={10} suffix="k followers" decimals={1}/>
                        <button className="visit-button">Visit</button>
                    </div>
                
            </div>
            {/* <div className="counter-children"><img src={ytWhite} alt="yt-white"/><CountUp end={100} duration={10} suffix="k followers" decimals={1}/></div> */}
        </div>
    ])
}

export default SocialCounter