import React, { Component } from 'react';

import './PageProfileCard.css';
import PageProfileCard from './PageProfileCard'

class PageProfileDisplayMen extends Component {
    
    state = {
        // on peut mettre notre tableau vide par défaut
        profiles: [],
    }


    getProfile = () => {
        // Récupération des profils via fetch
        fetch("https://discaz.github.io/API-profiles/api/all.json")
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

    <div className="gridcapacity Homme">
        {profiles.filter(profile => profile.gender.includes("Homme")).map((profile,index) =>
            (< PageProfileCard default1={profile.physic} default2={profile.mental} name={profile.username} img={profile.img} sex={profile.sex}/>))} 
    </div>
            
</body>
      
    )
}
}
export default PageProfileDisplayMen ;