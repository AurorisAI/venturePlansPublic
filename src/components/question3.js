import React from "react";
import "./layout.css";
import Img from "../images/question3.png"
import { Container, Row, Col, ListGroupItem } from "react-bootstrap";

const Question3 = () => (

    <div class="container">
        <div class="row">
            <div class="col-sm">
                <h3 className="subheading">You trusted partner in navigating through<br></br> uncertain times. Let's accelerate your growth.<br></br><br></br>
                </h3>
                <div>
                    <p>
                        Answer three questions so we can better help you with your<br></br> Business objectives<br></br><br></br>
                    </p>
                </div>
                <div className="pitanje">

                    <b>What is your industry?  Question 3 / 3</b><br></br><br></br>

                </div>
                <div>
                    <div className="row col-md-12">
                        <button className="phaseButton mr-2 md-6">Technology</button>
                        <button className="phaseButton mr-2 md-6">Fintechnology</button>
                        <button className="phaseButton mr-2 md-6">Real Estate</button>
                        <button className="phaseButton mr-2 md-6">Health Care</button>
                        <button className="phaseButton mr-2 md-6">Artificial Intelligence </button>

                        <button className="phaseButton mr-2 md-6">Consumer goods & Manufacturing</button>
                        <button className="phaseButton mr-2 md-6">Real Estate </button>
                        <button className="phaseButton mr-2 md-6">Cannabis </button>
                        <button className="phaseButton mr-2 md-6">Autombile Manufacturing </button>
                        <button className="phaseButton mr-2 md-6">Clean Tech</button>

                        <button className="phaseButton mr-2 md-6">Education & E-Learning </button>
                        <button className="phaseButton mr-2 md-6">Robotics </button>
                        <button className="phaseButton mr-2 md-6"> Advanced Consumer goods & Manufacturing</button>
                        <button className="phaseButton mr-2 md-6">Automation</button>
                        <button className="phaseButton mr-2 md-6">Quantum Information Science </button>

                        <button className="phaseButton mr-2 md-6">5-G Advanced Wireless Technology</button>
                        <button className="phaseButton mr-2 md-6">Biotechnlogy  </button>
                        <button className="phaseButton mr-2 md-6">Pharmaceutical</button>
                        <button className="phaseButton mr-2 md-6">Non-Profit Organization</button>
                        <button className="phaseButton mr-2 md-6">Finance</button>

                        <button className="phaseButton mr-2 md-6"> Virtual Reality</button>
                        <button className="phaseButton mr-2 md-6"> Oil & Gas</button>
                        <button className="phaseButton mr-2 md-6"> Cybersecurity</button>
                        <button className="phaseButton mr-2 md-6"> Biometrics</button>
                        <button className="phaseButton mr-2 md-6"> Cultivation </button>

                        <button className="phaseButton mr-2 md-6"> Block Chain</button>
                        <button className="phaseButton mr-2 md-6"> Aerospace & Defense  </button>
                        <button className="phaseButton mr-2 md-6"> Law, Financial Consulting & Accounting </button>
                        <button className="phaseButton mr-2 md-6"> Consumer Product & Services </button>
                        <button className="phaseButton mr-2 md-6"> Software, Apps, & Telecomunications </button>

                        <button className="phaseButton mr-2 md-6"> Medical Technology, Health & Fitness </button>
                        <button className="phaseButton mr-2 md-6"> Other</button>
                    </div>
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

export default Question3;
