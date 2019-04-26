import React from "react";
import PageProfiles from "./PageProfiles.json"
import './PageProfileCard.css';
import PageProfileCard from "./PageProfileCard";

const PageProfileDisplay = () => {
    return (
<body  className="cardsBody">

    <div className="gridcapacity">
        {PageProfiles.map(PageProfile => < PageProfileCard default1={PageProfile.physic} default2={PageProfile.mental} name={PageProfile.username} img={PageProfile.img} sex={PageProfile.sex}/>
 )} 

        
    </div>
            
</body>
      
    )
}

export default PageProfileDisplay ;