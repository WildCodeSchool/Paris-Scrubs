import React from "react"
import {NavLink, Link} from 'react-router-dom'

import PageProfileCard from './DisplayProfiles/PageProfileCard'
import './profilesearchbar.css'

class Profilesearchbar extends React.Component {
       state = {
         showFemal : false,
         showMal : false,
         showOther : false,
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
    
    componentDidMount() {
        this.getProfile()
      }

    render() {
      const { profiles } = this.state
      return (
      <div>
      <div class="filter-container" >
          <h2>Recherche de candidat</h2>
          <div>
          <ul className="checkboxes">
                <li>
                  <input class="with-gap" type="checkbox" onClick={this.handleShowMal}
                  
                   />
                  <label for="Today">Homme</label>
                </li>
                <li>
                  <input class="with-gap" type="checkbox" onClick={this.handleShowFemal}
                   />
                  <label for="week">Femme </label>
                </li>
                <li>
                  <input class="with-gap"  type="checkbox" onClick={this.handleShowOther}
                   />
                  <label for="month">Autre</label>
                </li>
                <li>
                  <input class="with-gap"  type="radio" />
                  <label for="year">Défault majeur</label>
                </li>
              </ul>
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
                return(profile.gender.includes('Homme'))
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