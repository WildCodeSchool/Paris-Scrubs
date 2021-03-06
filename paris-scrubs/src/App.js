import React, { Component } from 'react';

import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

import ProfilesPage from './Screens/ProfilesPage';
import Home from './Screens/Home'
import ProfilesPageMen from './Screens/ProfilePageMen';
import ProfilesPageWoman from './Screens/ProfilePageWoman';
import FormPage from './Screens/FormPage';

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
                <Route path="/formpage" component={FormPage} />
          </Switch>
          </BrowserRouter>
          </div>
    )}
}
export default App;
