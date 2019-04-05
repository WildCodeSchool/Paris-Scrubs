import React from 'react';
import './MonthProfile.css';

const profiles = [
    {
    photo :"https://images.unsplash.com/photo-1516651000622-7f32fe80a57a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    firstName : "Nolan",
    default : "Aquaphobie ou la peur de l'eau, ne se lave jamais",
    button : "Voir le profil de ", 
    },
    {
    photo :"https://images.unsplash.com/photo-1528960393052-3d5a27ac0cf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
    firstName : "Inès",
    default : "Complexée par sa face gauche",
    button : "Voir le profil de ",
    },
]

const MonthProfile = () => (
    <div className="container">
        {profiles.map(profile => (
        <div>
            <div className="photoContainer">
                <img src={profile.photo} alt="photo" className="photo"/>
            </div>
        <br />
        <span className="name"><strong>{profile.firstName}</strong></span>
        <br />
        <span className="default">{profile.default}</span>
        <br />
        <br />
        <button className="button">{profile.button}{profile.firstName}</button>
        </div>
        ))}
    </div>
);

export default MonthProfile;