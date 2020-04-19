import React, { Component } from 'react';
import Footer from './components/footer'

import './App.css';

import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { CSSTransition, TransitionGroup} from "react-transition-group";



import Header from './components/header'
import Video from './components/video'

import Contact from './components/contact'

import Nav from './components/nav'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      animationPlay: false,
      animationType: ''
    }
    
  }



  componentDidUpdate(){
    console.log('update')
  }

  render(){

  

    var str = {0:'/hayden-site',1:''}
    var choice = str[1]
    const history = createBrowserHistory()


    return (
      
      <div className="App">
        <Router history={history}>
          <Nav/>
          <Route
            render={()=>(
              
                  <Switch>
                    <Route path={choice+"/home"} component={Header} exact/>
                    <Route path={choice+"/portfolio"} component={Video} />
                    <Route path={choice+"/contact"} component={Contact} />
                    <Route path={choice+"/"} component={Header}/>
                  </Switch>

            )}
          />
        </Router>
        {/* <Footer/> */}
  
  
        
  
        
        {/* <Header/>
        <Video/>
        <Contact/>
        <Bottom/> */}
      </div>
    );
  }

  
}

export default App
