import React, { Component } from 'react';
import Displaypicto from './components/Displaypicto'
import MonthProfile from './components/MonthProfile';
import Navbar from './components/navbar';
import Card from './components/Cards.js'
import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

import ProfilesPage from './Screens/ProfilesPage';
import Home from './Screens/Home'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter> 
         <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profilepage" component={ProfilesPage} />
               
          </Switch>
          </BrowserRouter>
          </div>
    )}
}
export default App;
