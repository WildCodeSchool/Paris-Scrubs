import React from "react"
import { Link } from "react-router-dom"
import PageProfileDisplay from "../components/DisplayProfiles/PageProfileDisplay";
import Navbar from '../components/navbar';
import './ProfilesPage.css';
import './Home.css';
import Profilesearchbar from '../components/profilesearchbar';
import Footer from '../components/Footer';

class ProfilesPage extends React.Component {
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
        <PageProfileDisplay />
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

export default ProfilesPage