import React, { Component } from "react";
import ReactDOM from "react-dom";
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
        return (
     <div  class="PageProfilecard">
    <a >
        
        <div class="PageProfilecard-image"><img src={this.props.img} alt="" /></div>
        

        
        <div class="PageProfilecard-body">

           
            <div class="PageProfilecard-name">
                <p>Pseudo: {props.name}</p>
            </div>

           
            <div class="PageProfilecard-title">
                <h3>Défaut physique: {props.default1}</h3>
            </div>
            
            <div class="PageProfilecard-title">
                <h3>Défaut mental: {props.default2}</h3>
            </div>

            <div class="PageProfilecard-excerpt">
                <p>Pratique sexuelle: {props.sex} </p>
            </div>

            <main>
      
        <Modal  show={this.state.show} handleClose={this.hideModal}/>
          
    
            <button href="?" class="btn" onClick={this.showModal}>Profil Complet</button>
        </main>
        </div>
        
    </a>
</div>
    
        );
        }
}


export default PageProfileCard