import React from "react"
import { Link } from "react-router-dom"
import PageProfileDisplayMen from "../components/DisplayProfiles/PageProfileDisplay";
import Navbar from '../components/navbar';
import './ProfilesPage.css'
import Profilesearchbar from '../components/profilesearchbar';
import Footer from '../components/Footer'

class ProfilesPageMen extends React.Component {
  render() {
    return (
      <>
        <div >
        <header>
        
        <Navbar />
        </header>
        <div className="container">
        
        <div className="item-1">
        <Profilesearchbar />
        </div>
        
        <div className="item-2">
        <PageProfileDisplayMen />
        </div>
        </div>
        
        <footer>
          <Footer />
        </footer>
        </div>
      </>
    )
  }
}

export default ProfilesPageMen