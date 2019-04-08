import React from "react"

const DisplayCard = (props) => {
    return <div className="card">
                    
    <picture>
        <img src={props.img} alt=""/>
    </picture>
    
    <div className="card-content">

        <h2>{props.name}</h2>
        <p className="flaw"><strong>Défaut majeur : </strong>{props.default}</p>
        <p>{props.desc}</p>
    </div>
    

</div>
}

export default DisplayCard