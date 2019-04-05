import React from "react";
// src/components/cards.js
import './Cards.css';


const Card = () => {
    return (
<body>

    <div className="allcards">
        

        <div className="card">
                    
                        <picture>
                            <img src="https://res.cloudinary.com/dzzuxhr3r/image/upload/v1554387593/projet%20Scrub/Ugly-and-Crazy-Men-06.jpg" alt=""/>
                        </picture>
                        
                        <div className="card-content">

                            <h2>Gégé</h2>
                            <p className="flaw"><strong>Défaut majeur : </strong>Je baille constamment</p>
                            <p>"Tous les membres de ma famille sont atteints par cette incapacité à réprimer les baillements. Grâce à Scrub, j'ai pu trouver la compagne idéale qui tolèrede de voir constamment le fond de ma gorge ".</p>
                        </div>
                        
                    
        </div>
        
        <div className="card">
                
                <picture>
                    <img src="https://res.cloudinary.com/dzzuxhr3r/image/upload/v1554387593/projet%20Scrub/ugly1.jpg" alt="Norwegian boller"/>
                </picture>
                <div className="card-content">
                    <h2>Magalie et Jérémie, mariés récemment</h2>
                    <p className="flaw"><strong>Défaut majeur : </strong>Nous fumons comme des pompiers, notre maison est constamment enfumée</p>
                    <p>"C'est grâce à Scrub que nous nous sommes rencontrés. Impossible auparavant de trouver quelqu'un qui puisse supporter notre addiction à la cigarette et à tout ce qui se fume en général".</p>
                </div>
        </div>          



        <div className="card">
            
                <picture>
                    <img src="https://res.cloudinary.com/dzzuxhr3r/image/upload/v1554392582/12-strange-people-you-have-to-see-to-believe-1.jpg" alt="A dinosaur wearing an aluminium jacket"/>
                </picture>
                
                <div className="card-content">
                    <h2>Robert</h2>
                    <p className="flaw"><strong>Défaut majeur : </strong>J'aime me couvrir la peau avec des objets métalliques</p>
                    <p>"Couvrir mon corps de couverts me permet de calmer mes angoisses. J'ai pu, grâce à Scrub, rencontrer ma femme d'origine chinoise qui a elle une relation particulière avec les baguettes."</p>
                </div>
            
        </div>
</div>

</body>
      
    )
}

export default Card ;