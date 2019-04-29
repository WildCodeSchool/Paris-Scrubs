import React from "react"

import Navbar from '../components/navbar';
import ThreeButton from '../components/ThreeButton.js';
import Displaypicto from '../components/Displaypicto';
import MonthProfile from '../components/MonthProfile';
import Card from '../components/Cards.js';
import Footer from '../components/Footer';


class Home extends React.Component {
  render() {
    return (
        <div className="home">
        <header className="App-header">
        
          <Navbar />
         
        
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