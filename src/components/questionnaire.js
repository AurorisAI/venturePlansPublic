import React from 'react';
import "./layout.css";

import Img from "../images/imageBelowImageSlider.png";
import Img2 from "../images/question2.png";
import Img3 from "../images/question3.png";


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedComponent: 'A'
        };
    }

    buttonClickHandler (button) {
        this.setState({
            displayedComponent: button
        });
    }

    getDisplayedComponent () {
        let {displayedComponent} = this.state;

        if (displayedComponent === 'B') {
            return (<div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 className="subheading">You trusted partner in navigating through<br></br> uncertain
                                times. Let's accelerate your growth.<br></br><br></br>
                            </h3><br/><br/>
                                <p className="questionsub">
                                    Answer three questions so we can better help you with your<br></br> Business
                                    objectives<br></br><br></br>
                                </p>
                            <div className="pitanje">

                                <p>What service best suits your needs? <span>Question 2 / 3</span><br></br><br></br></p>

                            </div>
                            <div>
                                <div className="row col-md-12">
                                    <div className="row">
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Raise Capital</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Software or App Development</button>
                                    </div>
                                    <div className="row">
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Write a Business Plan</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Request For Proposal</button>
                                    </div>
                                    <div className="row">
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Grant Proposal</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Data and Market Trend Reports</button>
                                    </div>
                                    <div className="row">
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Due Diligence Certification</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Investment Portfolios</button>
                                    </div>
                                    <div className="row">
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Digital Transformation</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Agile Implementation</button>

                                    </div>
                                    <div className="row">
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Restructring</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Automation</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Digital Marketing</button>
                                    </div>
                                    <div className="row">
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}> Legals</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Crowdfunding</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Private Placement Memorandum</button>
                                    </div>
                                    <div className="row">
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>E-B5, E-2 VISA</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Cannabis Licensing & Aplication Support
                                        </button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Tax Planing</button>
                                    </div>
                                    <div className="row">
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Tax Planing</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Growth Strategy Implementation</button>
                                    </div>
                                    <div className="row">
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Intellectual Property</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Mangement Consulting</button>
                                        <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'C')}>Artificial Intelligence</button>

                                    </div>
                                </div>
                            </div>

                            <div>

                            </div>
                        </div>

                        <div className="col-sm-6">
                            <br></br>
                            <div className="subheading">
                                <img src={Img2} className="slika img-fluid img-thumbnail" alt=""></img>
                            </div>
                        </div>

                    </div>
                </div>
            );
        }

        if (displayedComponent === 'C') {
            return (

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <h3 className="subheading">You trusted partner in navigating through<br></br> uncertain times. Let's accelerate your growth.<br></br><br></br>
                            </h3>
                                <p className="questionnariesub">
                                    Answer three questions so we can better help you with your<br></br> Business objectives<br></br><br></br>
                                </p>
                            <div className="pitanje">

                                <p>What is your industry? <span> Question 3 / 3</span></p><br></br><br></br>

                            </div>
                            <div>
                                <div className="row col-md-12">
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Technology</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Fintechnology</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Real Estate</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Health Care</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Artificial Intelligence </button>

                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Consumer goods & Manufacturing</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Real Estate </button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Cannabis </button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Autombile Manufacturing </button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Clean Tech</button>

                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Education & E-Learning </button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Robotics </button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Advanced Consumer goods & Manufacturing</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Automation</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Quantum Information Science </button>

                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>5-G Advanced Wireless Technology</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Biotechnlogy  </button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Pharmaceutical</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Non-Profit Organization</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}>Finance</button>

                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Virtual Reality</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Oil & Gas</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Cybersecurity</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Biometrics</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Cultivation </button>

                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Block Chain</button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Aerospace & Defense  </button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Law, Financial Consulting & Accounting </button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Consumer Product & Services </button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Software, Apps, & Telecomunications </button>

                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Medical Technology, Health & Fitness </button>
                                    <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'D')}> Other</button>
                                </div>
                            </div>

                            <div>

                            </div>
                        </div>

                        <div class="">
                            <br></br>
                            <div class="subheading">
                                <img src={Img3} className="slika" alt=""></img>
                            </div>
                        </div>

                    </div>
                </div>
            );
        }
        if (displayedComponent === 'D') {
            return (
                <div className="container contactfomrsecond">
                    <div className="row">
                        <div className="container">
                            <div className="col-md-6">
                                <div className="row">
                                    <h1 className="conatctformTitle">Contact us</h1><span className="contactformSpan">
                                    <p className="contactformTitle1"> Contact Information</p></span>
                                </div>
                                <div className="row">
                                    <p className="conatctformsubtitile">Fill out the form below so we can book you for a
                                        free consultation with one of our accredited analysts. </p>
                                </div>
                            </div>
                        </div>
                        <div className="container" >
                            <div className="col-md-6" >

                                <p>Reason for inquiry:</p>
                                <form>
                                    <div className="form-group">
                                        <select className="form-control firstcontactinput"
                                                id="exampleFormControlSelect1">
                                            <option>Business Inquiry: I'm looking to work with Venture Plans</option>
                                            <option>Lorem ipsum</option>
                                            <option>Lorem ipsum</option>
                                            <option>Lorem ipsum</option>
                                            <option>Lorem ipsum</option>
                                        </select>
                                    </div>
                                </form>
                                <p className="contactformabout">About You</p>
                                <form className="firstcontactform">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName1"
                                               placeholder="Full Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputPPhone1"
                                               placeholder="Phone Number"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleFormControlInput1"
                                               placeholder="Your Email Address"/>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control firstcontactinput"
                                                id="exampleFormControlSelect1">
                                            <option>Select Country/Region</option>
                                            <option>Lorem ipsum</option>
                                            <option>Lorem ipsum</option>
                                            <option>Lorem ipsum</option>
                                            <option>Lorem ipsum</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="container formsecondpart">
                                <div  className="col-md-6">
                                    <p className="formsecondparttext row">How do you know of Venture Plans ? Please give us
                                        some general information about your inquiry today. It will help us come up with
                                        solutions, before your free consultation.</p>
                                    <br/>
                                    <form className="secondcontactform">
                                        <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"
                                          placeholder="i.e I found you on google, I am looking to raise capital for my business..">
                                </textarea>
                                        </div>
                                        <button type="submit" className="col-md-6">Submit</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
        return (<div className="container">
            <div className="row">
                <div className="col-sm">
                    <h3 className="subheading">You trusted partner in navigating through<br></br> uncertain times. Let's
                        accelerate your growth.<br></br><br></br>
                    </h3>
                    <p>
                        Answer three questions so we can better help you with your<br></br> Business
                        objectives<br></br><br></br>
                    </p>
                    <div className="pitanje">

                        <p> 1. What phase is your business in?<span> Question 1 / 3</span><br></br><br></br></p>

                    </div>
                    <div>
                        <row>
                            <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'B')}>Start-up</button>
                            <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'B')}>Seeking Exit</button>
                            <button className="phaseButton mr-2 md-6" onClick={this.buttonClickHandler.bind(this, 'B')}>In-revenue</button>
                        </row>
                    </div>

                    <div>
                        <row>
                            <button className="phaseButton mr-2" onClick={this.buttonClickHandler.bind(this, 'B')}>Acquisition</button>
                            <button className="phaseButton mr-2" onClick={this.buttonClickHandler.bind(this, 'B')}>M&A</button>
                            <button className="phaseButton mr-2" onClick={this.buttonClickHandler.bind(this, 'B')}>IPO & ICO</button>
                        </row>
                    </div>


                    <div>

                    </div>
                </div>

                <div className="">
                    <br></br>
                    <div className="subheading">
                        <img src={Img} className="slika" alt=""></img>

                    </div>
                </div>

            </div>
        </div>);
    }


    render () {
        return (
            <div>
                {this.getDisplayedComponent()}
            </div>
        );
    }
}

export default Main;