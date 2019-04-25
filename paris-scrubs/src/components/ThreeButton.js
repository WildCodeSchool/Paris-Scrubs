import React from 'react';
import {Link} from "react-router-dom";
import './ThreeButton.css';

const buttons = [
    {
    man : [ <Link to ="/profilepagemen"><button className="threeButton" type="button">Je cherche un homme</button></Link>],
    },
    {
    woman : [ <Link to ="/profilepagewomen"><button className="threeButton" type="button">Je cherche une femme</button></Link>],
    },
    {
    other : [ <Link to ="/profilepageother"><button className="threeButton" type="button">Je cherche autre chose</button></Link>],
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