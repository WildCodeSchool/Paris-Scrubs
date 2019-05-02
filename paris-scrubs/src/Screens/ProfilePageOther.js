import React from "react"
import { Link } from "react-router-dom"
import PageProfileDisplayOther from "../components/DisplayProfiles/PageProfileDisplayOther";
import Navbar from '../components/navbar';
import './ProfilesPage.css'
import Profilesearchbar from '../components/profilesearchbar';
import Footer from '../components/Footer'
import Clicksearchbar from '../components/Clicksearchbar';

class ProfilesPageOther extends React.Component {
  render() {
    return (
      <>
        <div >
        <header>
        
        <Navbar />
        </header>
        <Clicksearchbar />
        <div className="container">
        
        <div className="item-1">
        <Profilesearchbar />
        </div>
        
        <div className="item-2">
        <PageProfileDisplayOther />
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

export default ProfilesPageOther