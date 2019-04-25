import React, { Component } from 'react';
import Displaypicto from './components/Displaypicto'
import MonthProfile from './components/MonthProfile';
import Navbar from './components/navbar';
import Card from './components/Cards.js'
import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

import ProfilesPage from './Screens/ProfilesPage';
import Home from './Screens/Home'
import ProfilesPageOther from './Screens/ProfilePageOther';
import ProfilesPageMen from './Screens/ProfilePageMen';
import ProfilesPageWoman from './Screens/ProfilePageWoman';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter> 
         <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profilepage" component={ProfilesPage} />
                <Route path="/profilepagemen" component={ProfilesPageMen} />
                <Route path="/profilepagewomen" component={ProfilesPageWoman} />
                <Route path="/profilepageother" component={ProfilesPageOther} />
          </Switch>
          </BrowserRouter>
          </div>
    )}
}
export default App;
