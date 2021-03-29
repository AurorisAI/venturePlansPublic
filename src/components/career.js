import React from "react";
import "./layout.css";
import img from "../images/careerMan.png";
import womanImg from "../images/careerWoman.png"
import rectangleImg from "../images/RectangleCareer.png"

/* popraviti sliku zene i dodati desno RectangleCareer sliku */
const Career = () => (
    <div>
          <img src={img} className="d-block w-100 careerImg"/>
          <div className="careerText col-md-6">
            <p className="career ">CAREER<br/></p>
            <h1 className="venturePlans ">Venture Plans & You<br/><br/></h1>
            <button className="careerButton ">START HERE</button>
          </div>
        </div>
);

export default Career;