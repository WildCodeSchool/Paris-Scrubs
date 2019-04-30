import React from 'react';
import './Pictogram.css'

const pictograms = [
  {
    picto1 : [<div className="picto_container">
                <div className="picto_card">
                 <img className="image_picto" alt='pictograms' src="http://image.noelshack.com/fichiers/2019/14/5/1554470243-magnifier.png" ></img>
                 <h3>Vous recherchez</h3>
                 <p>Les Scrubbers qui vous convient</p>
                </div>
               </div>]

  },{ picto2 : [<div className="picto_container">
                 <div className="picto_card">
                 <img className="image_picto" alt='pictograms' src="http://image.noelshack.com/fichiers/2019/14/5/1554471648-choice.png" ></img>
                 <h3>Vous choisissez</h3>
                 <p>Le Scruber ou les Scrubbers qui vous conviennent</p>
                </div>
              </div>]

  },{picto3 : [<div className="picto_container">
                  <div className="picto_card3">
                    <img className="image_picto" alt='pictograms' src="http://image.noelshack.com/fichiers/2019/14/5/1554471788-heart.png" ></img>
                    <h3>Vous profitez</h3>
                    <p>de votre temps libre pour trouver la personne qui vous convient</p>
                  </div>
               </div>]

  }
]

const Displaypicto = () => (
  <>
  <h1 id="pictotag">Ce que nous proposons chez Scrubs</h1>
      <div className="picto_contener">
          {pictograms.map(pictogram => ( 
            <div>
            <div className="pictograms_container">
                <div className="picto1">{pictogram.picto1} </div>
            </div>

            <div className="pictograms_container">
                <div className="picto2">{pictogram.picto2} </div>
            </div>

            <div className="pictograms_container">
                <div className="picto3">{pictogram.picto3} </div>
            </div>
            </div>
          ))}
      </div>
 </>)

    export default Displaypicto