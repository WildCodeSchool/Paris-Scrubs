import React from 'react'
import './PageProfileCard.css';


const PageProfileCard = (props) => {
    return <div  class="PageProfilecard">
    <a >
        
        <div class="PageProfilecard-image"><img src={props.img} alt="" /></div>
        

        
        <div class="PageProfilecard-body">

           
            <div class="PageProfilecard-name">
                <p>Pseudo: {props.name}</p>
            </div>

           
            <div class="PageProfilecard-title">
                <h3>Défaut physique: {props.default1}</h3>
            </div>
            
            <div class="PageProfilecard-title">
                <h3>Défaut mental: {props.default2}</h3>
            </div>

            <div class="PageProfilecard-excerpt">
                <p>Pratique sexuelle: {props.sex} </p>
            </div>

            <button href="?" class="btn">Profil Complet</button>
        </div>
        
    </a>
</div>
    


}


export default PageProfileCard