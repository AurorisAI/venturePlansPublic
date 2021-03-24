import React from "react";
import "./layout.css";

import womanImg from "../images/careerWoman.png"
import rectangleImg from "../images/RectangleCareer.png"

/* popraviti sliku zene i dodati desno RectangleCareer sliku */
const Career = () => (
  <div className="container-fluid jumbotron2 jumbotron-fluid">
    <div className="jumbo-text">
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="title"></h1>

        <span className="career">CAREER</span>
        <img class="womanImage" src={womanImg}></img>
        <h1 className="venturePlans">Venture Plans & You</h1>

        <button className="careerButton">START HERE</button>

      </div>
    </div>
  </div>
);

export default Career;