import React from 'react'
import igWhite from '../assets/ig_blue.png'
import tiktokWhite from '../assets/tiktok_blue.png'
import ytWhite from '../assets/youtube_blue.png'
import CountUp from 'react-countup'


let SocialCounter = () =>{
    return([
        
        <div id="social-container">
            <div id="counter-header"><h1>Socials.</h1></div>
            <div id="counter-container">
                <div className="counter-children"><img src={igWhite} alt="ig-white"/><CountUp end={7.5} duration={10} suffix="k followers" decimals={1}/></div>
                <div className="counter-children"><img src={tiktokWhite} alt="tiktok-white"/><CountUp end={249.6} duration={10} suffix="k followers" decimals={1}/></div>
            
            </div>
            {/* <div className="counter-children"><img src={ytWhite} alt="yt-white"/><CountUp end={100} duration={10} suffix="k followers" decimals={1}/></div> */}
        </div>
    ])
}

export default SocialCounter