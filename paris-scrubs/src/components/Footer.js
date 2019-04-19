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
  {
    home: "My Account",
    link:""
  },
  {
    home: "Legal Mentions",
    link:""
  },
  {
    home: "Contact Us",
    link:""
  },
] 



const Footer = () =>(
  <footer className="footerDistributed">
    {footerSocial.map(footer => (

    <>
      <div className="footerRight">
        <NavLink to={footer.li} className="footerIcon" ><img className="footerImg"src={footer.logo}/></NavLink>
      </div>
    </>
    ))}

    {footerNav.map(footer => (
     
        <div className="footerLeft">  
          <p className="footerLinks">  
            <NavLink to={footer.link}>{footer.home} </NavLink>
          </p>  
        </div>
        
      
       ))}    
  </footer>

)   
    

export default Footer;