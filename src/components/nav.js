import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'

class Nav extends Component{

    constructor(props){
        super(props)
        this.state = {
            open:false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            open: !this.state.open
        });
    }




    
    render(){

        var str = {0:'/hayden-site',1:''}
        var choice = str[0]

        return(

             
            
            <div id="navbar-container">
            
                <ul id="navbar-list">
                    <li><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/home"}>Home</NavLink></li>                        
                    <li><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/booking"}>Booking</NavLink></li>                        
                    <li><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/portfolio"}>Portfolio</NavLink></li>                        
                    <li><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/contact"}>Contact</NavLink></li>                        
                </ul>
                <div className="hamburger-container">
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleClick}
                            width={18}
                            height={15}
                            strokeWidth={1}
                            rotate={0}
                            color='#73D3D2'
                            borderRadius={0}
                            animationDuration={0.5}
                        />

                    </div>
                <div className="hamburger-slide-container">
                    <div className="slidebar-list-container">
                        <div id="slidebar-list">
                            <div className="slidebar-menu-items"><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/home"}>Home</NavLink></div>                        
                            <div className="slidebar-menu-items"><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/booking"}>Booking</NavLink></div>                        
                            <div className="slidebar-menu-items"><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/portfolio"}>Portfolio</NavLink></div>                        
                            <div className="slidebar-menu-items"><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/contact"}>Contact</NavLink></div>                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav