import React from "react"

import Navbar from '../components/navbar';
import './ProfilesPage.css'
import ProfilesearchbarMan from '../components/DisplayProfiles/ProfilsearchbarMan';
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
        <ProfilesearchbarMan />
        </div>
        
        <div className="item-2">
        {/* <PageProfileDisplayMen /> */}
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