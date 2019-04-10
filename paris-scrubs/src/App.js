import React, { Component } from 'react';

import './App.css';
import MonthProfile from './components/MonthProfile';
import Navbar from './components/navbar';
import Card from './components/Cards.js'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <article>
          <MonthProfile />
        </article>
      <Card />
      <Footer />
      </div>
    );
  }
}

export default App;
