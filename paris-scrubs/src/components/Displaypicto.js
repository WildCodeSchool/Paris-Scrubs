import React from 'react';
import Pictograms from './ Pictograms'
import pictograms from '../pictograms.json'
import './Pictogram.css'



const Displaypicto = () => (
  <div>
    <h1>Ce que nous proposons chez Scrubs</h1>
    <div className="display_container">
      {pictograms.map(pictogram => ( <Pictograms image={pictogram.image} title={pictogram.title} text={pictogram.text} />
  ))}
     </div>
  </div>)

    export default Displaypicto