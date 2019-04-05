import React from 'react'
import "./Pictograms.css"


const Pictograms = () => {
    return (
    <body>
        <h1>Ce que nous proposons chez Scrubs</h1>
         <div className="container">
           <div className="picto1">
           <img className="icon1" src="http://image.noelshack.com/fichiers/2019/14/5/1554470243-magnifier.png" alt="search"></img>
             <h3>Vous recherchez</h3>
             <p>Les Scrubbers qui vous convient</p>
           </div>
           <div className="picto2">
           <img className="icon2" src="http://image.noelshack.com/fichiers/2019/14/5/1554471648-choice.png" alt="choice"></img>
              <h3>Vous choisissez</h3>
              <p>Le Scruber ou les Scrubbers qui vous conviennent</p>
           </div>
           <div className="picto3">
           <img className="icon3" src="http://image.noelshack.com/fichiers/2019/14/5/1554471788-heart.png" alt="heart"></img>
                <h3>Vous profitez</h3>
                <p>de votre temps libre pour ...<strong> ¯\_(ツ)_/¯</strong></p>
           </div>
         </div>
   
    </body>
    )
}
export default Pictograms;