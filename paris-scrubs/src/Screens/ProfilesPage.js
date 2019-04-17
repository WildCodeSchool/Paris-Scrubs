import React from "react"
import { Link } from "react-router-dom"
import PageProfileDisplay from "../components/DisplayProfiles/PageProfileDisplay";
import Navbar from '../components/navbar';
import './ProfilesPage.css'

class ProfilesPage extends React.Component {
  render() {
    return (
      <>
        <div >
        <header>
        
        <Navbar />
        </header>
        <div className="PageProfiledown">
        <PageProfileDisplay />
        </div>
          
        </div>
      </>
    )
  }
}

export default ProfilesPage