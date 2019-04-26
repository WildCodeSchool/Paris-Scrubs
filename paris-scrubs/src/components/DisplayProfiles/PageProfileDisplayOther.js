import React from "react";
import PageProfiles from "./PageProfiles.json"
import './PageProfileCard.css';
import PageProfileCard from './PageProfileCard'

const PageProfileDisplayOther = () => {
    return (
<body  className="cardsBody">

    <div className="gridcapacity">
    {PageProfiles.filter(PageProfile => PageProfile.gender.includes("autre")).map((PageProfile,index) => (< PageProfileCard default1={PageProfile.physic} default2={PageProfile.mental} name={PageProfile.username} img={PageProfile.img} sex={PageProfile.sex}/>))}
  

  
    </div>
            
</body>
      
    )
}

export default PageProfileDisplayOther ;