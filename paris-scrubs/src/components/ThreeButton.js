import React from 'react';
import {Link} from "react-router-dom";
import './ThreeButton.css';

const buttons = [
    {
    man : [ <Link to ="/profilepage"><img src="https://image.noelshack.com/fichiers/2019/17/4/1556190915-men.jpg" alt="" className="threeButton"/></Link>],
    },
    {
    woman : [ <Link to ="/profilepage"><img src="https://image.noelshack.com/fichiers/2019/17/4/1556190964-woman.jpg" alt="" className="threeButton"/></Link>],
    },
    {
    other : [ <Link to ="/profilepage"><img src="https://image.noelshack.com/fichiers/2019/17/4/1556191008-others.jpg" alt="" className="threeButton"/></Link>],
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