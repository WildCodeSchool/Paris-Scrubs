import React, { Component } from "react";
import "./navbar.css";
import Burger from './Burger'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Navfunction from "./Navfunction";

// import navlink which is a react component 

// <nav className="navbar">

//         <h1 className="scrubs">SCRUBS</h1>

//         <ul className="menu">
//             <li><a href="#">Pourquoi Scrubs ?</a></li>
//             <li><a href="#">Nos profils</a></li>
//             <li><a href="#">Nos témoignages</a></li>
//         </ul>

//     </nav>



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




class Navbar extends Component {

  /* Définition deux state window.pageYOffset et de True */
  /*window.pageYOffset il renvoie le nombre de pixels dans lesquels le document est en train de défiler le long de l'axe vertical (c'est-à-dire vers le haut ou le bas) avec une valeur de 0,0 */
  state = {
    prevScrollpos: window.pageYOffset,
    visible: true
  }


  /* Ajoute l'écouteur d'évenement (addEventListener)lorsque le composant est monté */

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  }
  /* Rétire l'écouteur d'évenements ("removeEventListener") une fois le composant démonté */

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  }


  /* Function pour Masquer ou afficher le menu */

  handleScroll = () => {

    /* Destructuration de la state prevScrollpos pour reprendre son Nom dans une variable */
    const { prevScrollpos } = this.state;

    /* Création de la variable currentScrollPos qui contient la state "window.pageYOffset" */
    const currentScrollPos = window.pageYOffset;

    /* Constante qui dit que prevScrollpos > currentScrollPos soit que window.pageYOffset est supérieur à window.pageYOffset*/
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div>
        <nav className={this.state.visible ? "navNavbar" : "navNavbar navbar--hidden"}>
          <NavLink className="navLink" exact to="/">
            <h1 className="navScrubs">SCRUBS</h1>  
          </NavLink>

          <div className="navMenu">
            {navbar.map(navbar => (
              <p className="navBloc"><Link className="navLink" to={navbar.link}>{navbar.text}</Link></p>
            ))}
          </div>
        
        <Navfunction visible={!this.state.visible} />
        <div className="burger-container"><Burger /></div>
        </nav>
      </div>
    );
  }
}

export default Navbar;


 