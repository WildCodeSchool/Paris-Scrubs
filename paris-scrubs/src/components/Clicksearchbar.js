import React from "react";
import "./Clicksearchbar.css";
import Functionsearchbar from "./Functionsearchbar";


class Clicksearchbar extends React.Component {


  /* State du bouton Candidat statué l'état False */ 
  state = {
  visibility: false,
  }

  /* Fonction pour changer la state en True donc l'état du bouton recherche Candidat*/
  handleClick = () => {
    this.setState ({ visibility: !this.state.visibility });
  }

  render() {
    return (
      <div id="clicksearchbar">

        <br/> <br/>  <br/> 

        {/* Button qui au click utilisera la fonction au dessus handleclick qui le fera changer de True à False*/} 
        <button className= "buttoncss" type="button" onClick={this.handleClick}>
          
          {/* Condition qui dis que : si la state est true elle affichera la string "RETOUR" sur le <button> </button> sinon si False afficher la string "RECHERCHE CANDIDAT" */}
          {this.state.visibility ? "RETOUR" : "RECHERCHE CANDIDAT"}</button>

      
          <br/> <br/>  <br/> 
            {/* Liaison entre le composant Functionsearchbar et la state boléenne pour appliquer le changement  d'état au click  */}
        <Functionsearchbar visibility={this.state.visibility} />
       
      </div>
    );
  }
}

export default Clicksearchbar;
