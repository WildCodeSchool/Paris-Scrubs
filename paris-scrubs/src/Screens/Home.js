import React from "react"
import { NavLink } from 'react-router-dom'
import Navbar from '../components/navbar';
import ThreeButton from '../components/ThreeButton.js';
import Displaypicto from '../components/Displaypicto';
import MonthProfile from '../components/MonthProfile';
import Card from '../components/Cards.js';
import Footer from '../components/Footer';
import Clicksearchbar from '../components/Clicksearchbar';


class Home extends React.Component {
  render() {
    return (
        <div className="home">
        <header className="App-header">
        
          <Navbar />
         
        
        <Clicksearchbar />
        <ThreeButton />
        </header>
        <Displaypicto  />
        <MonthProfile />
        <Card />
        
        <Footer />

        </div>

)
     
    
  }
}

export default Home