import React from "react"
import { Link } from "react-router-dom"
import PageProfileDisplayWoman from "../components/DisplayProfiles/PageProfileDisplayWoman";
import Navbar from '../components/navbar';
import './ProfilesPage.css'
import Profilesearchbar from '../components/profilesearchbar';
import Footer from '../components/Footer'

class ProfilesPageWoman extends React.Component {
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
        <PageProfileDisplayWoman />
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

export default ProfilesPageWoman