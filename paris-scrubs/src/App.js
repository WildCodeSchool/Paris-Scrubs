import React, { Component } from 'react';

import './App.css';
import MonthProfile from './components/MonthProfile';
import Navbar from './components/navbar';
import Card from './components/Cards.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Navbar />
<<<<<<< Updated upstream
          
          
=======

         {/*
          <Navbar 
            text="Lien 1"
          />

          <Navbar 
            text="Lien 2"
          />

          <Navbar 
            text="Lien 3"
          />
          */}

>>>>>>> Stashed changes
        </header>

        

        <header >
          
        </header>
          <article>
            <MonthProfile />
          </article>
      <Card />
      
      </div>
    );
  }
}

export default App;
