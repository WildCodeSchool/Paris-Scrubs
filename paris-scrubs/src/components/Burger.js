import React from 'react';
import "./navbar.css";
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
        { name: <Link className="navLink" exact to="/">Accueil</Link>, url: '' },
        /*{ name: <Link className="navLink" to="/#pictotag">Pourquoi Scrubs ?</Link>, url: '' },*/
        { name: <Link className="navLink" to="/profilepage">Nos profils</Link>, url: '' }, 
        /*{ name: <Link className="navLink" to="/#nostemoins">Nos témoignages</Link>, url: '' },*/
        { name: <Link className="navLink" to="/FormPage">Créez votre profil</Link>, url: ''}
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