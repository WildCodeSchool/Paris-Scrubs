import React, { Component } from "react";

import './PageProfileCard.css';
import './ModalWindow.css'
import Modal from './ModalWindow'

class PageProfileCard extends Component {
    state = { show: false };
 
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  


    render() {
        const profile = {
            name : this.props.name,  
            physic : this.props.default1, 
            mental : this.props.default2,
            image : this.props.img
        };   
        
        return (
     <div  class="PageProfilecard">
    
        
        <div className="PageProfilecard-image"><img src={this.props.img} alt="" /></div>
        

        
        <div className="PageProfilecard-body">

           
            <div className="PageProfilecard-name">
                <p>Pseudo: {this.props.name}</p>
            </div>

           
            <div className="PageProfilecard-title">
                <p>Déscription physique: {this.props.default1}</p>
            </div>
            
            <div className="PageProfilecard-title">
                <p>Caractère: {this.props.default2}</p>
            </div>

            <main>
      
        <Modal {...profile} show={this.state.show} handleClose={this.hideModal}/>
          
    
            <button href="?" class="btn" onClick={this.showModal}>Profil Complet</button>
        </main>
        </div>
        
    
</div>
    
        );
        }
}


export default PageProfileCard