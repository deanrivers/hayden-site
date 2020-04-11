import React, { Component } from 'react'
import logo from '../assets/logo.svg'

import Social from '../components/social-media'





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
                    
            </div>  
            
        )
    }
    
}

export default Header