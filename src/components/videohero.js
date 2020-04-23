import React from 'react'
import video from '../assets/videos/hv.mp4'

let VideoHero = () =>{
    return(
        <div id="hero-video-container">
            <video id="vid" autoPlay loop preload="none">
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
    // document.getElementById('vid').play();
}

export default VideoHero