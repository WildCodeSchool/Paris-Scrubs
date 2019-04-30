import React from "react";
import "./Navfunctioncss.css";


/* Fonction pour Creer un Slide en appliquant les 2 css lorsque la state visibility passe de  TRUE à false  */ 
/* Si visibitily est True appliquer slideIN si False appliquer slideout */

const Navfunction = ({ visible }) => (
  <div id="nav" className={visible ? "navbar" : "navbar--hidden"}>
  </div>
);

export default Navfunction;