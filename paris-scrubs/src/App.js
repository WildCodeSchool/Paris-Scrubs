import React, { Component } from 'react';

import './App.css';
import Navbar from './components/navbar';
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
      <Card />
      
      </div>
    );
  }
}

export default App;
