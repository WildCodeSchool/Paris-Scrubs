import React from "react";
import "./navbar.css";

{/* 

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
        text:"Pourquoi Scrubs ?"
    },
    {
        text:"Nos profils"
    },
    {
        text:"Nos témoignages"
    },
    {
        text:"test 1"
    },
];

const Navbar = () => (
    <>

    <nav className="navNavbar">

        <h1 className="navScrubs">SCRUBS</h1>
        
        <div className="navMenu">

            {navbar.map(poulet => (
                
                <p className="navBloc">{poulet.text}</p>
                
            ))}
        </div>
    </nav>

    </>

);

export default Navbar;