import React from "react";

import DisplayCard from "./DisplayCard";
import infosCard from "../infosCard.json"

import './Cards.css';

const Card = () => {
    return (
<body>

    <div className="allcards">
        {infosCard.map(infoCard => <DisplayCard default={infoCard.default} name={infoCard.name} img={infoCard.img} desc={infoCard.desc}/>
 )}

        
    </div>
            
</body>
      
    )
}

export default Card ;