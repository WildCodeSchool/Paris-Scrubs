import React from "react"

import Navbar from '../components/navbar';
import FormFillES5 from '../components/FormFillES5';
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

            <FormFillES5 />
            
            <footer>
                <Footer />
            </footer>
        </div>
      </>
    )
  }
}

export default FormPage