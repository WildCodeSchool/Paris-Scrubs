import React from 'react'
import "./Pictogram.css"


const Pictograms = ({image,title,text}) => {
  return (
         <div className="picto_container">
             <img className="image_picto" alt='pictograms' src={image} ></img>
             <h3>{title}</h3>
             <p>{text}</p>  
          </div>
    )
}
export default Pictograms;