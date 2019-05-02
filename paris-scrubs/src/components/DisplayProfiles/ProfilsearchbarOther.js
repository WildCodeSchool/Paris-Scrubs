import React from "react"
import {NavLink, Link} from 'react-router-dom'

import PageProfileCard from './PageProfileCard'
import './PageProfileCard.css'


class Profilesearchbar extends React.Component {
       state = {
         showFemal : false,
         showMal : false,
         showOther : false,
         visibility: false,
         profiles: []
       }

       handleShowFemal = () => {
        this.setState({ showFemal: !this.state.showFemal })
       }
       handleShowMal = () => {
         this.setState({ showMal: !this.state.showMal })
       }
       handleShowOther = () => {
         this.setState({ showOther: !this.state.showOther })
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
    
 /* Fonction pour changer la state en True donc l'état du bouton recherche Candidat*/
 handleClick = () => {
  this.setState ({ visibility: !this.state.visibility });
}

    componentDidMount() {
        this.getProfile()
      }



    render() {
      const { profiles } = this.state
      
      return (
      <div>
      
      <button className= "buttoncss" type="button" onClick={this.handleClick}>
      {this.state.visibility ? "RETOUR" : "RECHERCHE CANDIDAT"}</button>
      <div id="clicksearchbar">
      <div id="navbar" className={this.state.visibility ? "slideIn" : "slideOut"}>

      <div class="filter-container" >
          <h2>Filtrer la recherche</h2>
          <div>
          <ul className="checkboxes">
                <li>
                  <input class="with-gap" type="checkbox" onClick={this.handleShowMal}
                  name="other"
                   />
                  <label for="Today">Homme</label>
                </li>
                <li>
                  <input class="with-gap" type="checkbox" onClick={this.handleShowFemal}
                  name="other"
                   />
                  <label for="week">Femme </label>
                </li>
                <li>
                  <input class="with-gap"  type="checkbox" onClick={this.handleShowOther}
                   name="other" id="other" value="other" />
                  <label for="other">Autre</label>
                </li>
                <li>

                  <input class="default"  type="checkbox" />
                  <label for="year">Défault majeur</label>
                </li>
              </ul>
            </div>
            </div>
            </div>
            </div>
          <div className="gridcapacity">
             {profiles.filter(profile => {

            if(this.state.showFemal && this.state.showMal && this.state.showOther === true) {
            return(profile.gender.includes('Femme') + profile.gender.includes('Homme') + profile.gender.includes('autre') )}
             
              else if (this.state.showFemal && this.state.showOther === true)
              return(profile.gender.includes('Femme') + profile.gender.includes('autre') )
             
              else if (this.state.showMal && this.state.showOther === true)
              return(profile.gender.includes('Homme') + profile.gender.includes('autre') )
             
              else if (this.state.showFemal && this.state.showMal === true)
              return(profile.gender.includes('Femme') + profile.gender.includes('Homme'))
             
              else if (this.state.showMal === true)
              return(profile.gender.includes('Homme') )
             
              else if (this.state.showFemal === true)
              return(profile.gender.includes('Femme') )
             
              else if (this.state.showOther === true)
              return(profile.gender.includes('autre') )

              else if (this.state.showFemal || this.state.showMal || this.state.showOther === false) {
                  return(profile.gender.includes('autre'))
              }
             
            }).map(profile => < PageProfileCard default1={profile.physic} default2={profile.mental} name={profile.username} img={profile.img} sex={profile.sex}/> 
              )}
             
             {/* { .map(PageProfile => < PageProfileCard default1={PageProfile.physic} default2={PageProfile.mental} name={PageProfile.username} img={PageProfile.img} sex={PageProfile.sex}/> */}
              {/* )}      } */} 
          </div>
          </div>
          
      )
    }
  }

export default Profilesearchbar