import React from "react";

import DisplayCard from "./DisplayCard";
import infosCard from "../infosCard.json"

import './Cards.css';

const Card = () => {
    return (
<body className="cardsBody">
<h1 id="nostemoins">Nos témoignages</h1>
    <div className="cardsAllcards">
        {infosCard.map(infoCard => <DisplayCard default={infoCard.default} name={infoCard.name} img={infoCard.img} desc={infoCard.desc}/>
 )}

        
    </div>
            
</body>
      
    )
}

export default Card ;