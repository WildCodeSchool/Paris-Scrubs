import React, { Component } from 'react';

import './App.css';
<<<<<<< HEAD
import MonthProfile from './components/MonthProfile';
=======
import Navbar from './components/navbar';
>>>>>>> dev
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
          <article>
            <MonthProfile />
          </article>
      <Card />
      
      </div>
    );
  }
}

export default App;
