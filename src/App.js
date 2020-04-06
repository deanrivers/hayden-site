import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from './components/header'
import Video from './components/video'

import Contact from './components/contact'

import Nav from './components/nav'

let App = ()=>{
  var str = {0:'/hayden-site',1:''}
  var choice = str[1]

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
