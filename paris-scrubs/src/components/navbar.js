import React from "react";
import "./navbar.css";
import {NavLink, Link} from 'react-router-dom'

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
        link:""
    },
    {
        text:"Nos profils",
        link:"/profilepage"
    },
    {
        text:"Nos témoignages",
        link:""
    },
    
];

const Navbar = () => (
    <>

    <nav className="navNavbar">

        <NavLink exact to="/"><h1 className="navScrubs">SCRUBS</h1></NavLink>
        
        <div className="navMenu">
        
            {navbar.map(navbar => (
                
                <p className="navBloc"><NavLink to={navbar.link}>{navbar.text}</NavLink></p>

              
            ))}
       
        </div>
    </nav>

    </>

);

export default Navbar;