import React from 'react';
import eyeLogo from '../eyeLogo.svg';
import './MonthProfile.css';
import {Link} from 'react-router-dom'


const profiles = [
    {
    photo :"https://image.noelshack.com/fichiers/2019/28/2/1562659367-tee-shirt-homme-large-col-publicitaire-coton-peigne-ringspun.jpg",
    firstName : "James",
    flaw : "Proche chez toi",
    button : "Voir le profil de ", 
    link:"/profilepage"
    },
    {
    photo :"https://image.noelshack.com/fichiers/2019/28/2/1562662185-woman-2032350-960-720.jpg",
    firstName : "Lisa",
    flaw : "Avec le plus de point commun",
    button : "Voir le profil de ",
    link: "/profilepagewomen"
    },
]

const MonthProfile = () => (
    <div className="monthContainer">
        {profiles.map(profile => (
        <div>
            <div className="monthBox">
                <img src={profile.photo} alt="photos" className="monthPhoto"/>
                <p className="monthTitle">PROFIL DU MOIS  <p className="monthFlaw">{profile.flaw}</p></p>
                
            </div>
        <br />
       
        <br />
        <span className="monthName"><strong>{profile.firstName}</strong></span>
        <br />
        <Link exact to={profile.link}><img src={eyeLogo} className="monthLogo" alt="logo" /></Link>
        </div>
        ))}
    </div>
);

export default MonthProfile;