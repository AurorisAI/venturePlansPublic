import React,{ useEffect, useState } from "react";
import "./layout.css";

import Img1 from "../images/jumbotron.png";
import video1 from "../assets/videos/business_consulting.mp4";

import { ReactVideo } from "reactjs-media";

const SliderMenu = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="vertical-menu">

                <p href="#" class="active">Business Consulting</p>
                <p href="#">Financing</p>
                <p href="#">Automation and Digital tranformation</p>
                <p href="#">Agile Development</p>
                <p href="#">Research & Data Analysis</p>
                <p href="#">Who we are</p>
                <p href="#">Talk to Us</p>
            </div>

            <div className="colVideo" style={{width:"550px",height:"280px"}}>
                <ReactVideo
                    src={video1}
                    primaryColor="#34b1ef"
                    poster={Img1}
                />

                <p>
                    Our chief-level business consulting services come in an array of sub<br></br>branches like restructing and investment strategy. We are experts in <br></br>change management, technology and financing. Our customer focused <br></br>
                    analysis has proven to drive revenue growth.
                </p>
            </div></div></div>

);

export default SliderMenu;