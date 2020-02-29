
import Image from './image'
import React, { Component } from 'react'

class Gallery extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            imagePaths:[
                'https://data.whicdn.com/images/327014997/original.jpg?t=1550766960',
                'https://i.redd.it/2y8w94ed21w21.jpg',
                'https://i.redd.it/2y8w94ed21w21.jpg',
                'https://data.whicdn.com/images/327014997/original.jpg?t=1550766960',
                'https://i.redd.it/2y8w94ed21w21.jpg',
                'https://i.redd.it/2y8w94ed21w21.jpg',

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