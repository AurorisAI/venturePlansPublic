import React from "react";
import "./layout.css";

import womanImg from "../images/careerWoman.png"
import careerImg from "../images/career.png"

/* popraviti sliku zene i dodati desno RectangleCareer sliku */
const Career = () => (
  <div className="container-fluid jumbotron2 jumbotron-fluid">
    <div className="jumbo-text">
      <div class="row">
        <div class="col-md-6">
          <h3 className="careerTitle">CAREER</h3>
            
          <h1 className="careerVenturePlans">Venture Plans & You</h1>

          <button className="careerButton">START HERE</button>
        </div>
        <div class="col-md-6">
          <img class="womanImage" src={womanImg}></img>
        </div>

      </div>
  </div>
  </div>
);

export default Career;