import React from "react"

const DisplayCard = (props) => {
    return <div  className="cardsCard">
                    
    <picture>
        <img className="cardsImg"src={props.img} alt=""/>
    </picture>
    
    <div className="cardsCard-content">

        <h2 className="cardsH2">{props.name}</h2>
        <p className="cardsFlaw"><strong>Défaut majeur : </strong>{props.default}</p>
        <p>{props.desc}</p>
    </div>
    

</div>
}

export default DisplayCard