import React from "react";
import "./Functionsearchbar.css";


/* Fonction pour Creer un Slide en appliquant les 2 css lorsque la state visibility passe de  TRUE à false  */ 
/* Si visibitily est True appliquer slideIN si False appliquer slideout */

const Functionsearchbar = ({ visibility }) => (
  <div id="navbar" className={visibility ? "slideIn" : "slideOut"}>
    <p>Hello</p>
  </div>
);

export default Functionsearchbar;
