import React from "react"
import {NavLink, Link} from 'react-router-dom'
import PageProfiles from './DisplayProfiles/PageProfiles.json'
import './profilesearchbar.css'

class Profilesearchbar extends React.Component {
       state = {
         showFemal : false,
         showMal : false,
         showOther : false,
         Profil : PageProfiles
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

    render() {
      return (
      
      <div class="filter-container" >
          <h2>Recherche de candidat</h2>
          <div>
          <ul className="checkboxes">
                <li>
                  <input class="with-gap" type="checkbox" //onClick={this.handleShowMal}
                   />
                  <label for="Today">Homme</label>
                </li>
                <li>
                  <input class="with-gap" type="checkbox" //onClick={this.handleShowFemal}
                   />
                  <label for="week">Femme </label>
                </li>
                <li>
                  <input class="with-gap"  type="checkbox" //onClick={this.handleShowOther}
                   />
                  <label for="month">Autre</label>
                </li>
                <li>
                  <input class="with-gap"  type="radio" />
                  <label for="year">Défault majeur</label>
                </li>
               
              </ul>
            </div>
              {/* {this.state.PageProfiles.filter(profile => {
                if(this.state.showFemal && this.state.showMal && this.state.showOther === true) {
                  return(profile.gender.includes('femme') + profile.gender.includes('homme') + profile.gender.includes('autre') )}
                  else if (this.state.showFemal && this.state.showOther === true)
                  return(profile.gender.includes('femme') + profile.gender.includes('autre') )
                  else if (this.state.showMal && this.state.showOther === true)
                  return(profile.gender.includes('homme') + profile.gender.includes('autre') )
                  else if (this.state.showFemal && this.state.showMal === true)
                  return(profile.gender.includes('femme') + profile.gender.includes('homme'))
                  else if (this.state.showMal === true)
                  return(profile.gender.includes('homme') )
                  else if (this.state.showFemal === true)
                  return(profile.gender.includes('femme') )
                  else if (this.state.showOther === true)
                  return(profile.gender.includes('autre') )
              }).map((profile, index) => (
              <PageProfiles {...profile} />))} */}
          

      </div>
      
      )
    }
}

export default Profilesearchbar