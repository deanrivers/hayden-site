
import Image from './image'
import React, { Component } from 'react'

import imageP1 from '../assets/Porrtfolio/P1.JPG'
import imageP2 from '../assets/Porrtfolio/P2.JPG'
import imageP3 from '../assets/Porrtfolio/P3.JPG'


class Gallery extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            imagePaths:[
                imageP1,
                imageP2,
                imageP3,
                imageP2,
                imageP3,
                imageP1,
                imageP3,
                imageP1,
                imageP2,
            ]
        }
    }

    render(){
        return([
            
            <div id="events-header">
                <h1>EVENTS</h1>
            </div>,
    
            <div id="gallery-main-container">
                
                
                {this.state.imagePaths.map( (item,index)=>{
                    
                    return(
                        <div className="gallery-children" key={index}>
                            <Image src={this.state.imagePaths[index]} alt={index}/>
                        </div>
                        
                    )
                })}
            </div>
            
            ])
    }
}

export default Gallery