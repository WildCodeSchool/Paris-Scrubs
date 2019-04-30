import React from 'react';
import './Footer.css';
import {NavLink, Link} from 'react-router-dom'

const footerSocial = [
  {
    li: "http://www.facebook.com",
    logo: require('./logoFacebook.png')
  },
  {
    li: "https://twitter.com/login?lang=fr",
    logo: require('./logoTwitter.png')
  },
  {
    li: "https://instagram.com",
    logo: require('./logoInsta.png')
  },
]

const footerNav = [
  {
    home: "Home",
    link:"/"
  },
  {
    home: "Selected Profil",
    link:"/profilepage"
  }, 
  
  
] 
const footerNimp = [
  {
    home: "My Account",
    link: "https://www.omfgdogs.com/"
  },
  
 
  {
    home: "Contact Us",
    link: "https://www.omfgdogs.com/"
  }  
  
]



const Footer = () =>(

  <footer className="footerDistributed">
        <div className="icon_con">
         {footerSocial.map(footer => (
          <div className="footerRight">
          <a href={footer.li} className="footerIcon" ><img className="footerImg"src={footer.logo}/></a>
          </div>
    ))}
      </div>

    {footerNav.map(footer => (
     
        <div className="footerLeft">
          <p className="footerLinks">  
            <NavLink to={footer.link}>{footer.home} </NavLink>

          </p>  
        </div>
       ))} 
        <div className="footerLeftDog">
        {footerNimp.map(footer =>
          <a className="footerLinksDog"href={footer.link} >{footer.home} </a>
          )}
        </div>
  </footer>

)   
    

export default Footer;
