
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
                {this.state.imagePaths.map( (item,index)=>{
                    return(
                        <Image src={this.state.imagePaths[index]}/>
                    )
                })}
            </div>
        )
    }
}

export default Gallery