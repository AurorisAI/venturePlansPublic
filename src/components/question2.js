import React from "react";
import "./layout.css";
import Img from "../images/question2.png"
import { Container, Row, Col, ListGroupItem } from "react-bootstrap";
import Question3 from "./question3";

const Question2 = () => (

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

                    <b>What service best suits your needs?  Question 2 / 3</b><br></br><br></br>

                </div>
                <div>
                    <div className="row col-md-12">
                        <button className="phaseButton mr-2 md-6">Raise Capital</button>
                        <button className="phaseButton mr-2 md-6">Software or App Development</button>
                        <button className="phaseButton mr-2 md-6">Write a Business Plan</button>
                        <button className="phaseButton mr-2 md-6">Request For Proposal</button>
                        <button className="phaseButton mr-2 md-6">Grant Proposal</button>

                        <button className="phaseButton mr-2 md-6">Data and Market Trend Reports</button>
                        <button className="phaseButton mr-2 md-6">Due Diligence Certification</button>
                        <button className="phaseButton mr-2 md-6">Investment Portfolios</button>
                        <button className="phaseButton mr-2 md-6">Digital Transformation </button>
                        <button className="phaseButton mr-2 md-6">Agile Implementation</button>

                        <button className="phaseButton mr-2 md-6">Restructring</button>
                        <button className="phaseButton mr-2 md-6">Automation </button>
                        <button className="phaseButton mr-2 md-6">Digital Marketing </button>
                        <button className="phaseButton mr-2 md-6">     Legals </button>
                        <button className="phaseButton mr-2 md-6">Crowdfunding </button>

                        <button className="phaseButton mr-2 md-6">Private Placement Memorandum</button>
                        <button className="phaseButton mr-2 md-6">E-B5, E-2 VISA </button>
                        <button className="phaseButton mr-2 md-6">Cannabis Licensing & Aplication Support  </button>
                        <button className="phaseButton mr-2 md-6">Tax Planing</button>
                        <button className="phaseButton mr-2 md-6">Growth Strategy Implementation</button>

                        <button className="phaseButton mr-2 md-6">Intellectual Property </button>
                        <button className="phaseButton mr-2 md-6">Mangement Consulting </button>
                        <button className="phaseButton mr-2 md-6">Artificial Intelligence </button>
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

export default Question2;
