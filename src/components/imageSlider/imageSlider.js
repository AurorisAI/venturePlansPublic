import React, { Component } from "react";
import { useState } from "react";
import "./imageSliderStyle.css";

import Img1 from "../../images/jumbotron.png";
import Img2 from "../../images/industriesOfFuture.png";
import Img3 from "../../images/digitalTransformation.png";
import Img4 from "../../images/bigTrends.png";
import Img5 from "../../images/economicLeaders.png";
import Fade from "react-reveal/Fade";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = index => {
    setToggleState(index);
  };
  return (
    <div style={{ background: "#1f2935" }}>
      <div>
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Fade big>
              <div className="sliderimg">
                <Fade right>
                  <div className="slide-content">
                    <h1 className="card-title" style={{ color: "white" }}>
                      DEEP EXPERTISE IN <br></br>CAPITAL RAISING
                    </h1>
                    <a
                      href={"#"}
                      className="findouthow"
                      style={{ color: "white" }}
                    >
                      FIND OUT HOW
                      <span style={{ marginLeft: "12px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                          color="#00a1f1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </span>
                    </a>
                    <p className="card-text" style={{ color: "white" }}>
                      Global consulting firm with a speciality in Innovation,
                      <br></br>
                      Technology, Digital Transformation, Financing<br></br>
                      and Revenue Growth.
                    </p>
                    <button className="sliderBtn">REQUEST A QUOTE</button>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Fade big>
              <div className="sliderimg2">
                <Fade right>
                  <div
                    className="slide-content"
                    style={{
                      marginTop: "150px",
                      padding: "70px",
                      color: "white",
                    }}
                  >
                    <h1 className="card-title">INDUSTRIES OF THE FUTURE</h1>
                    <p className="card-text">
                      Upcoming Industries that will change the job market
                    </p>
                    <a
                      className="card-text findouthow"
                      style={{ color: "#00a1f1" }}
                    >
                      Read more
                    </a>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Fade big>
              <div className="sliderimg3">
                <Fade right>
                  <div
                    className="slide-content"
                    style={{
                      marginTop: "150px",
                      padding: "70px",
                      color: "white",
                    }}
                  >
                    <h1 className="card-title">DIGITAL TRANSFROMATION</h1>
                    <p className="card-text">
                      Preparation for a modern world economy
                    </p>
                    <a
                      className="card-text findouthow"
                      style={{ color: "white" }}
                    >
                      Read more
                    </a>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <Fade big>
              <div className="sliderimg4">
                <Fade right>
                  <div
                    className="slide-content"
                    style={{
                      marginTop: "150px",
                      padding: "70px",
                      color: "white",
                    }}
                  >
                    <h1 className="card-title">BIG TRENDS</h1>
                    <p className="card-text">
                      How will artificial intelligence impact your industry
                    </p>
                    <a
                      className="card-text findouthow"
                      style={{ color: "white" }}
                    >
                      Read more
                    </a>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>
          <div
            className={
              toggleState === 5 ? "content  active-content" : "content"
            }
          >
            <Fade big>
              <div className="sliderimg5">
                <Fade right>
                  <div
                    className="slide-content"
                    style={{
                      marginTop: "150px",
                      padding: "70px",
                      color: "white",
                    }}
                  >
                    <h1 className="card-title">ECONOMIC LEADERS</h1>
                    <p className="card-text">
                      U.S.,CHINA & INDIA Projected GDP Growth
                    </p>
                    <a
                      className="card-text findouthow"
                      style={{ color: "white" }}
                    >
                      Read more
                    </a>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>
          {/* <ScrollContainer className="SKROL_SRANJE"> */}
          <div className="bloc-tabs">
            <button
              // className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              className="tabs"
              onClick={() => toggleTab(1)}
            >
              <span
                className={
                  toggleState === 1
                    ? "progres-bar-span show-loader-span"
                    : "progres-bar-span"
                }
              />
              Work with us
            </button>
            <button
              // className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              className="tabs"
              onClick={() => toggleTab(2)}
            >
              <span
                className={
                  toggleState === 2
                    ? "progres-bar-span show-loader-span"
                    : "progres-bar-span"
                }
              />
              Economic Leaderss
            </button>
            <button
              // className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              className="tabs"
              onClick={() => toggleTab(3)}
            >
              <span
                className={
                  toggleState === 3
                    ? "progres-bar-span show-loader-span"
                    : "progres-bar-span"
                }
              />
              Digital Transformation
            </button>
            <button
              // className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              className="tabs"
              onClick={() => toggleTab(4)}
            >
              <span
                className={
                  toggleState === 4
                    ? "progres-bar-span show-loader-span"
                    : "progres-bar-span"
                }
              />
              Big Trends
            </button>
            <button
              // className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
              className="tabs"
              onClick={() => toggleTab(5)}
            >
              <span
                className={
                  toggleState === 5
                    ? "progres-bar-span show-loader-span"
                    : "progres-bar-span"
                }
              />
              Industries Of the Future
            </button>
          </div>
          {/* </ScrollContainer> */}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
