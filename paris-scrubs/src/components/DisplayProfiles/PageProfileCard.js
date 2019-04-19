import React from 'react'
import './PageProfileCard.css';


const PageProfileCard = (props) => {
    return <div  class="PageProfilecard">
    <a >
        
        <div class="PageProfilecard-image"><img src={props.img} alt="" /></div>
        

        
        <div class="PageProfilecard-body">

           
            <div class="PageProfilecard-name">
                <p>{props.name}</p>
            </div>

           
            <div class="PageProfilecard-title">
                <h3>{props.default}</h3>
            </div>
            
            <div class="PageProfilecard-excerpt">
                <p>{props.desc} </p>
            </div>

            <button href="?" class="btn">Profil Complet</button>
        </div>
        
    </a>
</div>
    


}


export default PageProfileCard