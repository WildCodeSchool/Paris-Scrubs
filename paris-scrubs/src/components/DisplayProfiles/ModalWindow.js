import React, { Component } from "react"


const Modal = ({ name, physic, mental, sexe, image, handleClose, show}) => {
    const showHideClassname = show ? "modal-display-block" : "modal-display-none";
  
    return (
      <div className={showHideClassname}>
         
          <div className="containerModal" >
            <div className="avatar-flip">
    <img src={image} />
    <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original"/>
                </div>
       
  <h2>{name}</h2>
  <h4>{physic}</h4>
  <h4>{mental}</h4>
  <h4>{sexe}</h4>
  <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.</p>
  <p>Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p>
  
  <button className="btn" onClick={handleClose}>close</button>
     </div>       
            </div>
        
    );
  };

export default Modal