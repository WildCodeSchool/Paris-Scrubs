import React from 'react';
import eyeLogo from '../eyeLogo.svg';
import './MonthProfile.css';

const profiles = [
    {
    photo :"https://images.unsplash.com/photo-1516651000622-7f32fe80a57a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    firstName : "Nolan",
    flaw : "Aquaphobie ou la peur de l'eau et ne se lave jamais",
    button : "Voir le profil de ", 
    },
    {
    photo :"https://images.unsplash.com/photo-1528960393052-3d5a27ac0cf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    firstName : "Inès",
    flaw : "Complexée par sa face gauche",
    button : "Voir le profil de ",
    },
]

const MonthProfile = () => (
    <div className="monthContainer">
        {profiles.map(profile => (
        <div>
            <div className="monthBox">
                <img src={profile.photo} alt="photo" className="monthPhoto"/>
                <p className="monthTitle">SUPER DEFAUT DU MOIS</p>
            </div>
        <br />
        <span className="monthFlaw">{profile.flaw}</span>
        <br />
        <span className="monthName"><strong>{profile.firstName}</strong></span>
        <br />
        <a href=""><img src={eyeLogo} className="monthLogo" alt="logo" /></a>
        </div>
        ))}
    </div>
);

export default MonthProfile;