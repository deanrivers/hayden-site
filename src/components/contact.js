import React, {Component} from 'react'
import aboutImage from '../assets/about_me.svg'
import contactImage from '../assets/contact.svg'
import FadeIn from 'react-fade-in'

class Contact extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div id="main-contact-container">
                <div className="svg-container">
                    <img className="svg-header" src={aboutImage} alt="about"/>
                </div>
                <p className="contact-paragraphs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
                </p>

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
        )
    }
}

export default Contact