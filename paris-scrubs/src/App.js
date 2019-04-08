import React, { Component } from 'react';

import Pictograms from './components/ Pictograms'
import './App.css';
import Card from './components/Cards.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Pictograms />
        <header >
          
        </header>
        <Card />
      
      </div>
    );
  }
}
export default App;
