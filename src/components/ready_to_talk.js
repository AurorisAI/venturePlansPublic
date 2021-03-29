import React, { useEffect, useState } from "react";
import "./layout.css";
import { BiDownArrow } from "react-icons/bi";
import { Dropdown } from "react-bootstrap";
import Img from "../images/question2.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Uncomment submitForm and then fix allignment */
export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,

    };
    return (
        <Slider {...settings}>
            <div>
                <div className="container-fluid scyscraperJumbotron" style={{padding:"70px"}}>
                    <div className="row">
                        <div className="col-sm">
                            <p className="readytotalktitle" >Ready to talk</p>
                            <p className="readytotalksubtitle">I would like to talk to your experts for:</p>
                            <br/><br/><br/>

                            <div className="dropdown dropdown-readytotalk">
                                <button className=" dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    Select a service
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                </div>
                            </div>
                        </div>
                        <div className="col-sm" >
                            <p className="readytotalksubtitle">Experienced in capital markets, a client-first culture, and potent track-record</p>
                            <form className="readytotalkform">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputName1"
                                           placeholder="Full Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputName1"
                                           placeholder="Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                           placeholder="Your Email Address"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container-fluid scyscraperJumbotron" style={{padding:"70px"}}>
                    <div className="row">
                        <div className="col-sm">
                            <p className="readytotalktitle" >Ready to talk</p>
                            <p className="readytotalksubtitle">I would like to talk to your experts in:</p>
                            <br/><br/><br/>
                            <div className="dropdown dropdown-readytotalk">
                                <button className=" dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    Select a service
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                </div>
                            </div>
                        </div>
                        <div className="col-sm" >
                            <p className="readytotalksubtitle">Experienced in capital markets, a client-first culture, and potent track-record</p>
                            <form className="readytotalkform">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputName1"
                                           placeholder="Full Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputName1"
                                           placeholder="Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                           placeholder="Your Email Address"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container-fluid scyscraperJumbotron" style={{padding:"70px"}}>
                    <div className="row">
                        <div className="col-sm">
                            <p className="readytotalktitle" >Ready to talk</p>
                            <p className="readytotalksubtitle">I would like to talk to your experts for:</p>
                            <br/><br/><br/>
                            <div className="dropdown dropdown-readytotalk">
                                <button className=" dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                    Select a service
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                </div>
                            </div>
                        </div>
                        <div className="col-sm" >
                            <p className="readytotalksubtitle">Experienced in capital markets, a client-first culture, and potent track-record</p>
                            <form className="readytotalkform">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputName1"
                                           placeholder="Full Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputName1"
                                           placeholder="Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                           placeholder="Your Email Address"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
}