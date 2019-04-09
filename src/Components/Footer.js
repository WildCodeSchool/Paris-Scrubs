import React from 'react';
import './Footer.css';

const footerSocial = [
  {
    li: "http://www.facebook.com",
    logo: require('../logoFacebook.png')
  },
  {
    li: "https://twitter.com/login?lang=fr",
    logo: require('../logoTwitter.png')
  },
  {
    li: "https://instagram.com",
    logo: require('../logoInsta.png')
  },
]

const footerNav = [
  {
    home: "Home"
  },
  {
    home: "Selected Profil"
  }, 
  {
    home: "My Account"
  },
  {
    home: "Legal Mentions"
  },
  {
    home: "Contact Us"
  },
] 



const Footer = () =>(
  <footer className="footerDistributed">
    {footerSocial.map(footer => (

    <>
      <div className="footerRight">
        <a className="footerIcon" href={footer.li}><img className="footerImg"src={footer.logo}/></a>
      </div>
    </>
    ))}

    {footerNav.map(footer => (
      <>
        <div className="footerLeft">  
          <p className="footerLinks">  
            <a href="home"> {footer.home} </a>
          </p>  
        </div>
        {/*<p> Scrub &copy; 2019 </p>*/}
      </>
      ) )}    
  </footer>

)   
    
    
export default Footer;