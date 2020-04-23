import React, {Component} from 'react'

import contactImage from '../assets/contact.svg'
import FadeIn from 'react-fade-in'

class Contact extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <FadeIn delay={1000} className="color">

            
                <div id="main-contact-container">
                    

                    <div className="svg-container">
                        <img className="svg-header" src={contactImage} alt="contact"/>
                    </div>

                    <div id="form-container">
                        <div id="input-container">
                            <input type="text" placeholder="name" name="name"/>
                            <input type="text" placeholder="email" name="email"/>
                        </div>
                            <textarea placeholder="message"/>
                    </div>

                    <div id="contact-button-container">
                        <button id="contact-button">send >>></button>
                    </div>
                </div>
            </FadeIn>
        )
    }
}

export default Contact