import React, { Component } from 'react';
import Displaypicto from './components/Displaypicto'

import './App.css';

import MonthProfile from './components/MonthProfile';
import Navbar from './components/navbar';

import MonthProfile from './components/MonthProfile';
import Navbar from './components/navbar';
 pictogrammes
import Card from './components/Cards.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">

          <Navbar />
          
          
        </header>

        

        <header >
          
        </header>
        
        <Displaypicto  />
        <header >
          
        </header>
        <Card />
        <header className="App-header">

          <Navbar />
          
          
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
