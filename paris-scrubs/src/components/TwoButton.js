import React from 'react';
import {Link} from "react-router-dom";
import './TwoButton.css';

const buttons = [
    {
    man : [ <Link to ="/profilepagemen"><img src="https://image.noelshack.com/fichiers/2019/17/4/1556190915-men.jpg" alt="" className="twoButton"/></Link>],
    },
    {
    woman : [ <Link to ="/profilepagewomen"><img src="https://image.noelshack.com/fichiers/2019/17/4/1556190964-woman.jpg" alt="" className="twoButton"/></Link>],
    },
    
]

const TwoButton = () => (           // stateless component 
    <div className="twoContainer">
       {buttons.map(button => (
           <div className="twoBox">
                <div className="twobtn1">{button.man}</div>
                <div className="twobtn2">{button.woman}</div>
            </div>
        ))}
    </div>
);

export default TwoButton;   


