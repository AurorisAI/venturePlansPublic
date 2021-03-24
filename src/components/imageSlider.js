import React from "react";
import "./layout.css";

import ImgBackground from "../images/background.png";
import ImgBackground2 from "../images/background2.png";
import ImgBackground3 from "../images/background3.png";

import ImgJumbotron1 from "../images/jumbotron.png";

import { Carousel } from "react-bootstrap";

const ImageSlider = () => (
    <div class="container">
      <div class="container-fluid"> 
        <Carousel indicators={false} class="my__carousel_main">
            <Carousel.Item>
                <img src={ImgBackground}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <div className="row">
                        <p class="workWithUs">Work With Us</p>
                        <p >Economic Leaders </p>
                        <p >Digital Transformation</p>
                        <p >Big Trends</p>
                        <p >Industries Of the Future </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ImgBackground2} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ImgBackground3}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ImgBackground}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ImgBackground}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div> 
    </div>
);

export default ImageSlider;