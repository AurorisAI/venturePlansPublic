import React from "react";

import { BiDownArrow } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";

/* Uncomment submitForm and then fix allignment */
const ReadyToTalk = () => (
  <div className="container-fluid scyscraperJumbotron">
    <div class="row">
      <div class="col" >
        <div className="readyToTalkHeader">Ready to talk?</div>

        <div className="talkFor">I would like to talk to your experts for:</div>
        <button
          className="selectAServiceButton">
          Select a service         <BiDownArrow />
        </button>
      </div>
      <div class="col" style={{marginLeft:"20px"}}>
        <p className="capitalMarkets">
          Experienced in capital markets, a client-<br></br>first culture, and potent track-record
        </p>
        <div className="submitForm">
          <input
            className="form-control fullNameInput"
            type="text"
            placeholder="Full Name"
          />
          <br />
          <input
            className="form-control fullNameInput"
            type="text"
            placeholder="Phone Number"
          />
          <br />
          <input
            className="form-control fullNameInput"
            type="text"
            placeholder="Your Email Address"
          />
          <br />
          <button className="submitButton">Submit</button>
        </div>
      </div>
    </div>
  </div>
);

export default ReadyToTalk;
