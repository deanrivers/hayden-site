import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header'
import Video from './components/video'
import Contact from './components/contact'
import Bottom from './components/bottom';

let App = ()=>{
  return (
    <div className="App">
      <Header/>
      <Video/>
      <Contact/>
      <Bottom/>
    </div>
  );
}

export default App;
