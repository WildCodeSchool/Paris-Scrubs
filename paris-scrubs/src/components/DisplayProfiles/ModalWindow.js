import React from "react"


const Modal = ({ name, physic, mental, sexe, image, handleClose, show}) => {
    const showHideClassname = show ? "modal-display-block" : "modal-display-none";
  
    return (
      <div className={showHideClassname}>
         
          <div className="containerModal" >
            <div className="avatar-flip">
                <img src={image} />
                <img src={image}/>
            </div>

          <div className="modalProfil">    
            <h1 className="modalName">{name}</h1>
            <p className="modalDescription">{physic}</p>
            <p className="modalDescription">{mental}</p>
            <p className="modalDescription">{sexe}</p>
            <p className="modalDescription">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.
            Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.
            Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p>
      
            <button className="btn" onClick={src=handleClose}>close</button>
          </div>       
          </div>
      </div>      
    );
  };
export default Modal