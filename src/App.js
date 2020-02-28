import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header'
import Video from './components/video'

let App = ()=>{
  return (
    <div className="App">
      <Header/>
      <Video/>
    </div>
  );
}

export default App;
