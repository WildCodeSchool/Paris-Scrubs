import React from 'react';
import './Burger.scss';
import {NavLink, Link} from 'react-router-dom';

const menus = [
  { name: '', url: '' },
  { name: '', url: '' },
  { name: '', url: '' }, 
  { name: '', url: '' }
]

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      on: false,
      menus : [
        { name: 'Accueil', url: '' },
        { name: 'Pourquoi Scrubs ?', url: '' },
        { name: 'Nos profils', url: '' }, 
        { name: 'Nos témoignages', url: '' },
        { name: 'Créez votre profil', url: ''}
      ]
    }
  }
  onClickHandler() {
    this.setState({ on: !this.state.on });
  }
  
  render() {
    const listItems = this.props && this.state.menus.map((item => <li key={item.name}>{item.name}</li>));
    return (
      <div className={"menu-button " + (this.state.on ? 'on' : '')}>
        <div className="menu-button--toggle" onClick={this.onClickHandler.bind(this)}><span></span></div>
        <ul className="menu-button--list">
          { listItems }
        </ul>
      </div>);
  } 
}

const element = <Burger menus={menus}/>;

export default Burger;