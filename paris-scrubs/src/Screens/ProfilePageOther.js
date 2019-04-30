import React from "react"
import { Link } from "react-router-dom"
import PageProfileDisplayOther from "../components/DisplayProfiles/PageProfileDisplayOther";
import Navbar from '../components/navbar';
import './ProfilesPage.css'
import ProfilsearchbarOther from '../components/DisplayProfiles/ProfilsearchbarOther';
import Footer from '../components/Footer'


class ProfilesPageOther extends React.Component {
  render() {
    return (
      <>
      
        <div >
        <header>
            <Navbar/>
        </header>

        <div className="container">
        
        <div className="item-1">
        <ProfilsearchbarOther />
        </div>
        
        <div className="item-2">
        {/* <PageProfileDisplayOther /> */}
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