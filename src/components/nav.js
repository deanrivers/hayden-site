import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends Component{
    render(){
        return(
            
            <div id="navbar-container">
                <ul id="navbar-list">
                    <li><NavLink activeClassName="activeRoute" className="Nav_Link" to="/home">Home</NavLink></li>                        
                    <li><NavLink activeClassName="activeRoute" className="Nav_Link" to="/booking">Booking</NavLink></li>                        
                    <li><NavLink activeClassName="activeRoute" className="Nav_Link" to="/portfolio">Portfolio</NavLink></li>                        
                    {/* <li><NavLink activeClassName="activeRoute" className="Nav_Link" to="/gallery">Portfolio</NavLink></li>                         */}
                    <li><NavLink activeClassName="activeRoute" className="Nav_Link" to="/contact">Contact</NavLink></li>                        
                </ul>
            </div>
        )
    }
}

export default Nav