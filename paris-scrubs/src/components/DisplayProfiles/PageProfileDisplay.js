import React from "react";
import PageProfiles from "./PageProfiles.json"
import './PageProfileCard.css';
import PageProfileCard from './PageProfileCard'

const PageProfileDisplay = () => {
    return (
<body  className="cardsBody">

    <div className="gridcapacity">
        {PageProfiles.map(PageProfile => < PageProfileCard default={PageProfile.default} name={PageProfile.name} img={PageProfile.img} desc={PageProfile.desc}/>
 )} 

        
    </div>
            
</body>
      
    )
}

export default PageProfileDisplay ;