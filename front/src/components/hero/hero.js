
import React from "react";
import himg from './assests/himg.png'
import './hero.css';

function Hridirect(){
window.location.href ='/SignUp';
}
function Hero(){

    return(
        <div className="herocont">
            <h1 className="hh1">
            Create and share your any type of<br></br>
quiz or test with others.
            </h1>
            <h3 className="hh3">
            Create Your Programing Quiz or Survey and others to evaluate anything
            </h3>
            <button className="hb" onClick={Hridirect}>
            Begin Now
            </button>
         

            <img src={himg} alt="Pqueesy" className="himg"></img>

        </div>
    );
}
export default Hero;