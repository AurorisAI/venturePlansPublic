import React from "react";
import "./layout.css";
import Img from "../images/imageBelowImageSlider.png"
import Question2 from "./question2";

const Question1 = () =>
    (<div class="container">
        <div class="row">
            <div class="col-sm">
                <h3 className="subheading">You trusted partner in navigating through<br></br> uncertain times. Let's
                    accelerate your growth.<br></br><br></br>
                </h3>
                <div>
                    <p>
                        Answer three questions so we can better help you with your<br></br> Business objectives<br></br><br></br>
                    </p>
                </div>
                <div className="pitanje">

                    1. What phase is your business in? Question 1 / 3<br></br><br></br>

                </div>
                <div>
                    <row>
                        <button className="phaseButton mr-2 md-6">Start-up</button>
                        <button className="phaseButton mr-2 md-6">Seeking Exit</button>
                        <button className="phaseButton mr-2 md-6">In-revenue</button>
                    </row>
                </div>

                <div>
                    <row>
                        <button className="phaseButton mr-2">Acquisition</button>
                        <button className="phaseButton mr-2">M&A</button>
                        <button className="phaseButton mr-2">IPO & ICO</button>
                    </row>
                </div>


                <div>

                </div>
            </div>

            <div class="">
                <br></br>
                <div class="subheading">
                    <img src={Img} className="slika" alt=""></img>

                </div>
            </div>

        </div>
    </div>
    );

export default Question1;
