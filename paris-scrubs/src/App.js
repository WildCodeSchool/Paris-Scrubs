import React, { Component } from 'react';

import './App.css';
import MonthProfile from './components/MonthProfile';
import Card from './components/Cards.js'

class App extends Component {
  render() {
    return (
      <div className="App">
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
