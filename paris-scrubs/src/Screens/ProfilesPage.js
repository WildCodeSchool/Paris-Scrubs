import React from "react"
import { Link } from "react-router-dom"
import PageProfileDisplay from "../components/DisplayProfiles/PageProfileDisplay";



class ProfilesPage extends React.Component {
  render() {
    return (
      <>
        <div >
        <Link to="/"> Retour à l'accueil </Link>
        <PageProfileDisplay />
        
          
        </div>
      </>
    )
  }
}

export default ProfilesPage