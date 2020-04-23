import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'
import {withRouter, useLocation} from 'react-router'
import Animation from './animation'
import $ from 'jquery'
import {slide as Menu} from 'react-burger-menu'

//import $ from 'jquery'
import Social from './social-media'
import { createBrowserHistory } from "history";

class Nav extends Component{

    constructor(props){
        super(props)
        this.state = {
            open:false,
            browserHistory: [],
        }
        this.handleClick = this.handleClick.bind(this)
        this.menuItemClicked = this.menuItemClicked.bind(this)
    }

    componentWillMount() {
        
        this.unlisten = this.props.history.listen((location, action) => {
            console.log("on route change");
            console.log('current location:',location)

        });
    }

    componentWillUnmount() {
          this.unlisten();
    }

    handleClick(){
        this.setState({
            open: !this.state.open
        });

        // grab slider container
        var sliderContainer = document.getElementsByClassName('ham-nav-items')[0]
        var hamburger = document.getElementById('hamburger')
        //handle click of burger menu
        if(!this.state.open){
            //setting 1
            sliderContainer.classList.add('slide-in')
            sliderContainer.classList.remove('slide-out')
            sliderContainer.classList.remove('slide-none')
            document.getElementsByTagName('html')[0].setAttribute("style", "overflow-y:auto;")

            //hamburger animation forward
            hamburger.classList.add('hamburger-circle')
            hamburger.classList.remove('hamburger-square')

        } else if(this.state.open){
            //setting 2
            sliderContainer.classList.remove('slide-in')
            sliderContainer.classList.add('slide-out')
            //document.getElementsByTagName('html')[0].setAttribute("style", "overflow-y:auto;");

            //hamburger animation
            hamburger.classList.remove('hamburger-circle')
            hamburger.classList.add('hamburger-square')
        } else{
            console.log('....um')
        }
        //listen to click of navbar iterms
        var navItems = document.getElementsByClassName('Nav_Link')
        var hamburger = document.getElementsByClassName('hamburger-container')[0]
    }

    menuItemClicked(){

        //determine if destination route is the sasme as current route
        const history = this.props.location.pathname
        const currentRoute = this.props.history
        let changedRoute = false
        console.log('current:',currentRoute.location.pathname)
        console.log('history:',history)

        //determine if a new route has been accessed
        if(history!==currentRoute.location.pathname){
            changedRoute = true
        }

        const playAnimation = changedRoute?true:false
        
        if(playAnimation){
            $('#animation-container').fadeIn('slow',()=>{
                $('#animation-container').addClass('flex')
                document.getElementsByTagName('html')[0].setAttribute("style", "overflow-y:hidden;");
                
                setTimeout(function(){
                    $('#animation-container').fadeOut('fast',()=>{
                        $('#animation-container').removeClass('flex')
                        document.getElementsByTagName('html')[0].setAttribute("style", "overflow-y:auto;");
                    })
                },100)
            })
        }        
        


        this.handleClick()
        
          
        
    }

    render(){

        var str = {0:'/hayden-site',1:''}
        var choice = str[1]


        return([

            <Animation/>,
            
            <div id="navbar-container">
                <Social/>

                <div id="hamburger-nav-container">
                    <div id="hamburger" className="hamburger-container">
                            
                            <HamburgerMenu
                                isOpen={this.state.open}
                                menuClicked={this.handleClick}
                                width={25}
                                height={20}
                                strokeWidth={1}
                                rotate={0}
                                // color='#73D3D2'
                                color='#07BEB8'
                                borderRadius={0}
                                animationDuration={0.5}
                            />
                            

                        </div>
                    <div id="hamburger-slide-container" className="ham-nav-items">
                        <div className="slidebar-list-container">
                            <div id="slidebar-list">
                                <div onClick={this.menuItemClicked} className="slidebar-menu-items"><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/home"}><p>Home</p></NavLink></div>                        
                                <div onClick={this.menuItemClicked} className="slidebar-menu-items"><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/about"}><p>About</p></NavLink></div>                        
                                <div onClick={this.menuItemClicked} className="slidebar-menu-items"><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/booking"}><p>Booking</p></NavLink></div>                        
                                <div onClick={this.menuItemClicked} className="slidebar-menu-items"><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/portfolio"}><p>Portfolio</p></NavLink></div>                        
                                <div onClick={this.menuItemClicked} className="slidebar-menu-items"><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/contact"}><p>Contact</p></NavLink></div>                        
                            </div>
                        </div>
                    </div>

                </div>
                
                

                
            </div>,
            <div id="vanilla-nav-container">
                {/* <ul id="navbar-list"> */}
                <div className="vanilla-children" onClick={this.menuItemClicked}><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/home"}><p>HOME</p></NavLink></div>
                <div className="vanilla-children" onClick={this.menuItemClicked}><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/about"}><p>ABOUT</p></NavLink></div>
                <div className="vanilla-children" onClick={this.menuItemClicked}><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/booking"}><p>BOOKING</p></NavLink></div>
                <div className="vanilla-children" onClick={this.menuItemClicked}><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/portfolio"}><p>PORTFOLIO</p></NavLink></div>
                <div className="vanilla-children" onClick={this.menuItemClicked}><NavLink activeClassName="activeRoute" className="Nav_Link" to={choice+"/contact"}><p>CONTACT</p></NavLink></div>
                {/* </ul> */}

        </div>
        ])
    }
}

export default withRouter(Nav)