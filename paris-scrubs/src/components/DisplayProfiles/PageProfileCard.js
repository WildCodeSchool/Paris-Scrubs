import React from 'react'



const PageProfileCard = (props) => {
    return <div class="card">
    <a >
        
        <div class="card-image"><img src={props.img} alt="" /></div>
        

        
        <div class="card-body">

           
            <div class="card-date">
                <p>{props.name}</p>
            </div>

           
            <div class="card-title">
                <h3>{props.default}</h3>
            </div>
            
            <div class="card-excerpt">
                <p>{props.desc} </p>
            </div>

        </div>
        
    </a>
</div>
    


}


export default PageProfileCard