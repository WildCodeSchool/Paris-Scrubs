
import React, { Component } from "react";


const Modal = ({ handleClose, show}) => {
    const showHideClassname = show ? "modal-display-block" : "modal-display-none";
  
    return (
      <div className={showHideClassname}>
         
          <div className="containerModal" >
            <div className="avatar-flip">
    <img src="https://i.pinimg.com/originals/8a/11/a8/8a11a823d86f6fa8a5a64f2c411c4c00.jpg" />
    <img src="https://i.pinimg.com/originals/8a/11/a8/8a11a823d86f6fa8a5a64f2c411c4c00.jpg"/>
                
       </div>
  <h2>Didier l'Embrouille</h2>
  <h4>Casseur professionel</h4>
  <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.</p>
  <p>Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p>
  
  <button className="btn" onClick={handleClose}>close</button>
     </div>       
            </div>
        
    );
  };
export default Modal