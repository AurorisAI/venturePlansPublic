import React from 'react';
import "./layout.css";


const Mail = () => (
    <div className="container col-md-12">
        <div className="row">
            <div className="container">
                <div className="col-md-6" style={{display:"table-cell"}}>
                    <div className="col-sm row">
                        <h1 className="conatctformTitle">Contact us</h1><span className="contactformSpan">
                        <p className="contactformTitle1"> Contact Information</p></span>
                    </div>
                    <div className="col-sm-12 row">
                        <p className="conatctformsubtitile">Fill out the form below so we can book you for a free consultation with one of our accredited analysts. </p>
                    </div>
                </div>
            </div>
            <div className="container" style={{display:"table-row"}}>
                <div className="col-md-6" style={{display:"table-cell"}}>

                    <p>Reason for inquiry:</p>
                    <form>
                        <div className="form-group">
                            <select className="form-control firstcontactinput" id="exampleFormControlSelect1" >
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
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                       placeholder="Your Email Address"/>
                            </div>
                            <div className="form-group">
                                <select className="form-control firstcontactinput" id="exampleFormControlSelect1" >
                                    <option>Select Country/Region</option>
                                    <option>Lorem ipsum</option>
                                    <option>Lorem ipsum</option>
                                    <option>Lorem ipsum</option>
                                    <option>Lorem ipsum</option>
                                </select>
                            </div>
                        </form>
                </div>
                <div style={{display:"table-cell"}} className="col-md-6">
                    <p className="conatctformsubtitile ">How do you know of Venture Plans ? Please give us some general information about your inquiry today. It will help us come up with solutions, before your free consultation.</p>
                    <br/>
                    <form className="secondcontactform">
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="i.e I found you on google, I am looking to raise capital for my business..">
                            </textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    </div>
);

export default Mail;
