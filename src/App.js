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
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route
          render={()=>(
            <Switch>
              <Route path="/home" component={Header} exact/>
              <Route path="/portfolio" component={Video} exact/>
              <Route path="/contact" component={Contact} exact/>
              <Route path="" component={Header}/>
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
