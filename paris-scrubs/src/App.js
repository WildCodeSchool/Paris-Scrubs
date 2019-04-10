import React, { Component } from 'react';

import MonthProfile from './components/MonthProfile';
import Navbar from './components/navbar';
import Card from './components/Cards.js'
import Footer from './components/Footer'
import Displaypicto from './components/Displaypicto'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Navbar />
        </header>
        
        <Displaypicto  />

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
