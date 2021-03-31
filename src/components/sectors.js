import React, { useState } from "react";

import "./layout.css";

import ImgB from "../images/circleB.png";
import ImgA from "../images/circleA.png";
import ImgC from "../images/circleC.png";
import { ProgressBar } from "react-bootstrap";
import WifiIcon from "../images/sectors-icon-wifi.png";

const data = [
  { text: "Busines Plans", icon: WifiIcon },
  { text: "Commercial Real Estate", icon: ImgC },
  { text: "Cannabis Application Support", icon: ImgA },
  { text: "Software/Apps & Telecommunications", icon: WifiIcon },
  { text: "Clean Tech", icon: ImgC },
  { text: "Consumer Products & Services", icon: WifiIcon },
  { text: "Financing", icon: WifiIcon },
];
const rotate = function (array, n) {
  array.unshift.apply(array, array.splice(n, array.length));
  return array;
};
const Sectors = () => {
  const [selectedElement, setSelectedElement] = useState(4);
  const [elements, setElements] = useState([1, 2, 3, 4, 5, 6, 7]);
  const changeSelectedOption = e => {
    const el = +e.target.id;
    setSelectedElement(el);
    const index = elements.indexOf(el);
    setElements(rotate(elements, index - 3));
  };
  return (
    <div className="container-fluid">
      <div
        className="container"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <p className="valuesAndOverview">SECTORS WE EXCELLED IN</p>
        <div className="container subheading2">
          Client expertise in 150+ industries, find out how we can help you
          adapt to a changing economy
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div
        className="row"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <div
          className="col-sm sector-options-container"
          style={{
            backgroundColor: "#E8F5FF",
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%",
          }}
        >
          {elements.map(el => (
            <div
              className={
                selectedElement === el
                  ? "selector-options active-selector-option"
                  : "selector-options"
              }
              key={el}
              id={el}
              onClick={changeSelectedOption}
            >
              <img alt={el} id={el} src={data[el - 1].icon} />
              <div alt={el} id={el}>
                {data[el - 1].text}
              </div>
            </div>
          ))}
        </div>
        <div className="col-sm" style={{ display: "flex" }}>
          <div className="row">
            <div className="col">
              <div
                className="row"
                style={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <span className="sectorsNumber">8</span>
                <p className="sectorsParagraph">Industry Consultants</p>
              </div>
              <ProgressBar
                className="sector-progress-bar"
                now={10 * selectedElement}
              />
            </div>
            <div className="col">
              <div
                className="row"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <span className="sectorsNumber">10</span>
                <p className="sectorsParagraph">Years of Experience</p>
              </div>
              <ProgressBar
                className="sector-progress-bar"
                now={4 * selectedElement}
              />
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div
                className="row"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <span className="sectorsNumber">386</span>
                <p className="sectorsParagraph">Business Plans Written</p>
              </div>
              <ProgressBar
                className="sector-progress-bar"
                now={13 * selectedElement}
              />
            </div>
            <div className="col">
              <div
                className="row"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <span className="sectorsNumber">35 MM</span>
                <p className="sectorsParagraph">Raised</p>
              </div>
              <ProgressBar
                className="sector-progress-bar"
                now={5 * selectedElement}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-fluid">
        <button className="consultationButton">
          <b>BOOK A FREE CONSULTATION</b>
        </button>
      </div>
    </div>
  );
};

export default Sectors;
