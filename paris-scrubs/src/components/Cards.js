import React from "react";
// src/components/cards.js
import './Cards.css';


const Card = (props) => {
    return (
<body>

    <div className="allcards">
        

        <div className="card">
                    
                        <picture>
                            <img src="https://res.cloudinary.com/dzzuxhr3r/image/upload/v1554387593/projet%20Scrub/Ugly-and-Crazy-Men-06.jpg" alt=""/>
                        </picture>
                        
                        <div className="card-content">

                            <h2>Gégé</h2>
                            <p className="flaw"><strong>Major Flaw : </strong>I can't help yawning all the time</p>
                            <p>Execute are we in agreeance what do you feel you would bring to the table if you were hired for this position, nor closer to the metal goalposts, are there any leftovers in the kitchen?.</p>
                        </div>
                        
                    
        </div>
        
        <div className="card">
                
                <picture>
                    <img src="https://res.cloudinary.com/dzzuxhr3r/image/upload/v1554387593/projet%20Scrub/ugly1.jpg" alt="Norwegian boller"/>
                </picture>
                <div className="card-content">
                    <h2>Magalie et Jérémie, just married</h2>
                    <p className="flaw"><strong>Major Flaw : </strong>We only feel confortable in a smoky environment</p>
                    <p>Execute are we in agreeance what do you feel you would bring to the table if you were hired for this position, nor closer to the metal goalposts, are there any leftovers in the kitchen?.</p>
                </div>
        </div>          



        <div className="card">
            
                <picture>
                    <img src="https://res.cloudinary.com/dzzuxhr3r/image/upload/v1554392582/12-strange-people-you-have-to-see-to-believe-1.jpg" alt="A dinosaur wearing an aluminium jacket"/>
                </picture>
                
                <div className="card-content">
                    <h2>Robert</h2>
                    <p className="flaw"><strong>Major Flaw :</strong> I like to cover my body with silverware</p>
                    <p>hViral engagement anti-pattern back of the net, for meeting assassin horsehead offer. Loop back design thinking drop-dead date.</p>
                </div>
            
        </div>
</div>

</body>
      
    )
}

export default Card ;