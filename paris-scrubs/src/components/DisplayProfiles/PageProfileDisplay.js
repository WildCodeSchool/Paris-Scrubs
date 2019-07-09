import React, { Component } from 'react';

import './PageProfileCard.css';
import PageProfileCard from "./PageProfileCard";



class PageProfileDisplay extends Component {
    
    state = {
        // on peut mettre notre tableau vide par défaut
        profiles: [],
    }


    getProfile = () => {
        // Récupération des profils via fetch
        fetch("https://sahsou.github.io/api-profiles/api/all.json")
          .then(response  =>  response.json())
          .then(result  => console.log(result) ||
            // mise à jour de la state avec les nouvelles données
            this.setState({
              profiles:  result 
            }))
        };
    
    componentDidMount() {
        this.getProfile()
      }


   render() {
    const { profiles } = this.state
    
    return (
<body  className="cardsBody">
    <div className="gridcapacity">
        {profiles.map(profile => < PageProfileCard default1={profile.physic} default2={profile.mental} name={profile.username} img={profile.img}/>)} 

        
    </div>
    
            
</body>
    );
}
}      


export default PageProfileDisplay ;