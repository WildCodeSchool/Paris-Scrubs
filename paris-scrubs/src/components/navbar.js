import React from "react";
import "./navbar.css";
import {NavLink} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

{/* import navlink which is a react component 

<nav className="navbar">
        
        <h1 className="scrubs">SCRUBS</h1>
        
        <ul className="menu">
            <li><a href="#">Pourquoi Scrubs ?</a></li>
            <li><a href="#">Nos profils</a></li>
            <li><a href="#">Nos témoignages</a></li>
        </ul>
        
    </nav>

*/}

const navbar = [
    {
        text:"Pourquoi Scrubs ?",
        link:"#pictotag"
    },
    {
        text:"Nos profils",
        link:"/profilepage"
    },
    {
        text:"Nos témoignages",
        link:"#nostemoins"
    },
    
];

const Navbar = () => (
    <>

    <nav className="navNavbar">

        <NavLink className="navLink" exact to="/"><h1 className="navScrubs">SCRUBS</h1></NavLink>
        
        
        <div className="navMenu">
        
            {navbar.map(navbar => (
                
                <p className="navBloc"><Link className="navLink" to={navbar.link}>{navbar.text}</Link></p>

              
            ))}
       
        </div>
    </nav>

    </>

);

export default Navbar;