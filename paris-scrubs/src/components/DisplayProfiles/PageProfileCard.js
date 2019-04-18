import React from 'react'



const PageProfileCard = (props) => {
    return <div  class="PageProfilecard">
    <a >
        
        <div class="PageProfilecard-image"><img src={props.img} alt="" /></div>
        

        
        <div class="PageProfilecard-body">

           
            <div class="PageProfilecard-date">
                <p>{props.name}</p>
            </div>

           
            <div class="PageProfilecard-title">
                <h3>{props.default}</h3>
            </div>
            
            <div class="PageProfilecard-excerpt">
                <p>{props.desc} </p>
            </div>

        </div>
        
    </a>
</div>
    


}


export default PageProfileCard