import React from "react"
import { Link } from "react-router-dom"
import Navbar from '../components/navbar';
import './ProfilesPage.css'
import ProfilsearchbarOther from '../components/DisplayProfiles/ProfilsearchbarOther';
import Footer from '../components/Footer'
import Clicksearchbar from '../components/Clicksearchbar';


class ProfilesPageOther extends React.Component {
  render() {
    return (
      <>
        <div >
        <header>
            <Navbar/>
        </header>
<<<<<<< HEAD
        <Clicksearchbar />
=======

>>>>>>> dev
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