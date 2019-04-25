import React from 'react';
import {Link} from "react-router-dom";
import './ThreeButton.css';

const buttons = [
    {
<<<<<<< HEAD
    man : [ <Link to ="/profilepage"><img src="https://image.noelshack.com/fichiers/2019/17/4/1556190915-men.jpg" alt="" className="threeButton"/></Link>],
    },
    {
    woman : [ <Link to ="/profilepage"><img src="https://image.noelshack.com/fichiers/2019/17/4/1556190964-woman.jpg" alt="" className="threeButton"/></Link>],
    },
    {
    other : [ <Link to ="/profilepage"><img src="https://image.noelshack.com/fichiers/2019/17/4/1556191008-others.jpg" alt="" className="threeButton"/></Link>],
=======
    man : [ <Link to ="/profilepagemen"><button className="threeButton" type="button">Je cherche un homme</button></Link>],
    },
    {
    woman : [ <Link to ="/profilepagewomen"><button className="threeButton" type="button">Je cherche une femme</button></Link>],
    },
    {
    other : [ <Link to ="/profilepageother"><button className="threeButton" type="button">Je cherche autre chose</button></Link>],
>>>>>>> dev
    },
]

const ThreeButton = () => (           // stateless component 
    <div className="threeContainer">
       {buttons.map(button => (
           <div className="threeBox">
                <div className="threebtn1">{button.man}</div>
                <div className="threebtn2">{button.woman}</div>
                <div className="threebtn3">{button.other}</div>
            </div>
        ))}
    </div>
);

export default ThreeButton;   