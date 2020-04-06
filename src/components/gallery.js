
import Image from './image'
import React, { Component } from 'react'


class Gallery extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            imagePaths:[
                'https://data.whicdn.com/images/327014997/original.jpg?t=1550766960',
                'https://data.whicdn.com/images/327014997/original.jpg?t=1550766960',
                'https://data.whicdn.com/images/327014997/original.jpg?t=1550766960',
                'https://data.whicdn.com/images/327014997/original.jpg?t=1550766960',
                'https://data.whicdn.com/images/327014997/original.jpg?t=1550766960',
                'https://data.whicdn.com/images/327014997/original.jpg?t=1550766960',
            ]
        }
    }

    render(){
        return(
            

            
            <div id="gallery-main-container">
                <h1>REAL CONTENT<span className="orange-text">.</span></h1>
                <h1><span className="orange-text">REAL EVIDENCE</span>.</h1>
                {this.state.imagePaths.map( (item,index)=>{
                    
                    return(
                        <Image key={index} src={this.state.imagePaths[index]} alt={index}/>
                    )
                })}
            </div>
            
        )
    }
}

export default Gallery