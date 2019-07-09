import React from "react";
import "./navbar.css";
import Burger from './Burger'
import {NavLink} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

/* import navlink which is a react component 

<nav className="navbar">
        
        <h1 className="scrubs">SCRUBS</h1>
        
        <ul className="menu">
            <li><a href="#">Pourquoi Scrubs ?</a></li>
            <li><a href="#">Nos profils</a></li>
            <li><a href="#">Nos témoignages</a></li>
        </ul>
        
    </nav>

*/

const navbar = [
    {
        text:"Pourquoi Scrubs ?",
        link:"/#pictotag"
    },
    {
        text:"Nos profils",
        link:"/profilepage"
    },
    {
        text:"Nos témoignages",
        link:"/#nostemoins"
    },
    {
        text:"Créez votre profil",
        link:"/FormPage"
    },
];

const Navbar = () => (
    <>

    <nav className="navNavbar">

        <NavLink className="navLink" exact to="/">
        <h1 className="navScrubs"><span className="firstletter">S</span><span className="secondletter">C</span><span className="thirdletter">R</span>
        <span className="fourthletter">U</span>
        <span className="fifthletter">B</span>
        <span className="sixthletter">S</span>
        </h1>
        </NavLink>
        
        
        <div className="navMenu">
        
            {navbar.map(navbar => (
                
                <p className="navBloc"><Link className="navLink" exact to={navbar.link}>{navbar.text}</Link></p>

              
            ))}
       
        </div>

        <div className="burger-container"><Burger /></div>
        
    </nav>

    </>

);

export default Navbar;