import React, { Component } from 'react';

import './App.css';
import Navbar from './components/navbar';
import ThreeButton from './components/ThreeButton.js';
import Displaypicto from './components/Displaypicto';
import MonthProfile from './components/MonthProfile';
import Card from './components/Cards.js';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <ThreeButton />
        </header>
        <Displaypicto  />
        <MonthProfile />
        <Card />
        <Footer />
      </div>
    );
  }
}
export default App;
