import React from "react";
import "./layout.css";
import bbc from "../images/BBC.png"

import laImg from "../images/laTimes.png"
import cbsImg from "../images/cbs.png"
import nbcImg from "../images/nbc.png"
import foxImg from "../images/newfox.png"
import ellipseImg from "../images/Ellipse 3951.png"
import bbcImg from "../images/bbc.png"

const Consultation = () => (
  <div className='container-fluid'
       data-sal="slide-down"
       data-sal-delay="300"
       data-sal-easing="ease">
    <div className="row1">
      <div className="heading2">
        Start your business today
    </div>
    </div>
    <div className="row1">
      <div className="subheading2">
        We've raised more than $100M for our clients
    </div>
      <br></br>
    </div>

    <div className='container-fluid text-center '>
      {/* <button className="consultationButton"><b>BOOK A FREE CONSULTATION</b></button> */}
      <button type="button" class="btn btn-primary bookDugme"><div class="booktext">BOOK A FREE CONSULTATION</div></button>
    </div>

    <br></br>
    <div className="row1">
      <div className="asSeenOn">
        AS SEEN ON
      </div>
    </div>
    <div class="row seenElementsContainer">
      <div class="seenElements"><img src={bbc}></img></div>
      <div class="seenElementsLa"><img src={laImg}></img></div>
      <div class="seenElementsCBS"><img src={cbsImg}></img></div>
      <div class="seenElementsNBC"><img src={nbcImg}></img></div>
      <div class="seenElementsFOX"><img src={foxImg}></img></div>
    </div>

    <br></br>
  <div className="">

  </div>

  </div>
);

export default Consultation;
