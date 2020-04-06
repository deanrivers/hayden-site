import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import Header from './components/header'
import Video from './components/video'
import Gallery from './components/gallery'
import Contact from './components/contact'
import Bottom from './components/bottom'
import Nav from './components/nav'

let App = ()=>{
  var str = {0:'/hayden-site',1:''}
  var choice = str[0]

  return (
    <div className="App">
      <Router>
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


      

      
      {/* <Header/>
      <Video/>
      <Contact/>
      <Bottom/> */}
    </div>
  );
}

export default App;
