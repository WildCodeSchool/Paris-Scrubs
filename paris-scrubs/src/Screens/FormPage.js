import React from "react"

import Navbar from '../components/navbar';
import FormFill from '../components/FormFill';
import Footer from '../components/Footer'
import './ProfilesPage.css'

class FormPage extends React.Component {
  render() {
    return (
      <>
        <div >
            <header>
            
            <Navbar />
            </header>

            <FormFill />
            
            <footer>
                <Footer />
            </footer>
        </div>
      </>
    )
  }
}

export default FormPage