import React, { Component } from 'react';
import Displaypicto from './components/Displaypicto'

import './App.css';
import Card from './components/Cards.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Displaypicto  />
        <header >
          
        </header>
        <Card />
      
      </div>
    );
  }
}
export default App;
