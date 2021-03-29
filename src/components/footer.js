import React from "react";
import "./layout.css";
import Logo from "../images/logoRow.png";
import Fb from "../images/fb.png";
import Insta from "../images/insta.png";
import Twitter from "../images/tw.png";
import In from "../images/in.png";
import Yt from "../images/youtube.png";
import Secure from  "../images/secure.png";
const Footer = () => (
    <div className="container-fluid footer">
            <div className="row" style={{justifyContent:"space-between",padding:"70px"}}>

                <div style={{float:"right",textAlign:"right"}} className="social row col-md-6">
                    <img src={In}/>
                    <img src={Twitter}/>
                    <img src={Fb}/>
                    <img src={Yt}/>
                </div>
            </div>

            <div className="space" ></div>
            <div className="row col-md-12">
                <div className="col-md-6" style={{float:"left",textAlign:"left"}}>
                    <p className="footersub">Subscribe to see what’s trending in your industry</p>
                </div>
                <div className="col-md-6 row" style={{float:"right",textAlign:"right"}}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control col-md-6" placeholder="Your Email Address"
                               aria-label="Recipient's username" aria-describedby="basic-addon2">
                        </input>
                        <button type="button" className="btn btn-primary" >Submit</button>
                    </div>
                </div>
            </div>
        <div style={{marginBottom:"40px"}}></div>
            <div className="row col-md-12">
                <div className="row col-md-6" style={{float:"left",textAlign:"left"}}>
                    <div style={{float:"left"}}><img src={Secure}/></div>
                    <div style={{float:"right",marginTop:"20px"}}>
                        <p className="rights">© 2010 -2021 Venture Plans, Inc. </p>
                    </div>
                </div>
                <div className="row col-md-6 footercontact" style={{float:"right",textAlign:"right"}}>
                    <a href="#">Email Us</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookie Policy </a>
                    <a href="#">Terms of Use </a>
                    <a href="#">Contact</a>
                    <a href="#">Top</a>
                </div>
            </div>
    </div >
);

export default Footer;