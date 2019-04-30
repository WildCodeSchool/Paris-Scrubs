import React from "react"
import {NavLink, Link} from 'react-router-dom'
import PageProfiles from './PageProfiles.json'
import PageProfileCard from './PageProfileCard'
import './PageProfileCard.css'

class Profilesearchbar extends React.Component {
       state = {
         showFemal : false,
         showMal : false,
         showOther : false,
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
             {PageProfiles.filter(profile => {

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
                  return(profile.gender.includes('Femme'))
              }
             
            }).map(PageProfile => < PageProfileCard default1={PageProfile.physic} default2={PageProfile.mental} name={PageProfile.username} img={PageProfile.img} sex={PageProfile.sex}/> 
              )}
             
             {/* { .map(PageProfile => < PageProfileCard default1={PageProfile.physic} default2={PageProfile.mental} name={PageProfile.username} img={PageProfile.img} sex={PageProfile.sex}/> */}
              {/* )}      } */} 
          </div>
          </div>
      )
    }
  }

export default Profilesearchbar