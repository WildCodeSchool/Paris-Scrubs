import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

import ProfilesPage from './Screens/ProfilesPage';
import Home from './Screens/Home'



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
        
         
         <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profilepage" component={ProfilesPage} />
               
          </Switch>
          </div>
        </BrowserRouter>
         </div>
    );
  }
}
export default App;
