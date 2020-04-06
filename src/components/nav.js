import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'

class Nav extends Component{

    constructor(props){
        super(props)
        this.state = {
            open:false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            open: !this.state.open
        });

        // grab slider container
        var sliderContainer = document.getElementsByClassName('ham-nav-items')[0]

        //handle click of burger menu
        if(!this.state.open){
            //setting 1
            sliderContainer.classList.add('slide-in')
            sliderContainer.classList.remove('slide-out')
            sliderContainer.classList.remove('slide-none')
            document.getElementsByTagName('html')[0].setAttribute("style", "overflow-y:hidden;");

            //overflow hidden html

            
            
            
        } else if(this.state.open){
            //setting 2
            sliderContainer.classList.remove('slide-in')
            sliderContainer.classList.add('slide-out')
            document.getElementsByTagName('html')[0].setAttribute("style", "overflow-y:auto;");
        } else{
            console.log('....um')
        }

        //listen to click of navbar iterms
        var navItems = document.getElementsByClassName('Nav_Link')
        var hamburger = document.getElementsByClassName('hamburger-container')[0]



        for(var i = 0;i<navItems.length;i++){
            navItems[i].addEventListener('click', function(){
                // sliderContainer.classList.remove('slide-in')
                // sliderContainer.classList.add('slide-out')
                // this.handleClick()
                hamburger.click()
                console.log('click')


            })
        }
        

    }

    render(){

        var str = {0:'/hayden-site',1:''}
        var choice = str[1]

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
                            width={25}
                            height={20}
                            strokeWidth={1}
                            rotate={0}
                            // color='#73D3D2'
                            color='black'
                            borderRadius={0}
                            animationDuration={0.5}
                        />

                    </div>
                <div id="hamburger-slide-container" className="ham-nav-items">
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