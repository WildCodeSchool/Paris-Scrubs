import React, { Component } from 'react';

import './App.css';
import MonthProfile from './components/MonthProfile';
import Navbar from './components/navbar';
import Card from './components/Cards.js';
import ThreeButton from './components/ThreeButton.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <ThreeButton />
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
