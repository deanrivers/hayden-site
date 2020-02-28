import React from 'react'

let Video = () =>{
    
        return(
            <div id="video-section-container">
                <div id="video-header-container">
                    <h1>REAL FREESTYLER<span className="orange-text">.</span></h1>
                    <h1><span className="orange-text">REAL BALLER</span>.</h1>
                </div>

                <div id="iframe-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/v1L2C3qXOKE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
            </div>
        )
    
        
    
}

export default Video