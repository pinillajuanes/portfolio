import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    /*
    <div className='back'>
      <nav>
        <div className="logo">
            <img alt="logo" />
        </div>
        <ul className='nav-list'>
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
        </ul>
        
      </nav>
    </div>
    */
    <div className='back'>
    <div id='up'></div>
    <div id='down'></div>
    <div id='left'></div>
    <div id='right'></div>
    <div className='back'>
      <nav>
        <div className="logo">
            <img alt="logo" />
        </div>
        <ul className='nav-list'>
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
        </ul>
        
      </nav>
    </div>
    <div className='details'>
      <div className='text'>
          <h3 id='slogan'>JUAN ESTEBAN PINILLA AGUILERA</h3>
          <br></br>
          <br></br>
          <p id='explicacion'>Full Stack Developer - Software Architect</p>
          </div> 
    </div>
  </div>
    // xdxdxd

  
  );
}

export default App;
