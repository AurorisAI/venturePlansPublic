import React from "react";
import "./layout.css";

import ImgLogos from "../images/logoRow.png";

const Logos = () => (
  <div className="container-fluid"
       data-sal="slide-down"
       data-sal-delay="300"
       data-sal-easing="ease">
    <img src={ImgLogos} className="logosRow" alt="" />
  </div>
);

export default Logos;
