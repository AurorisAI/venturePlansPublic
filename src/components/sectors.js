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

const Sectors = () => {
  const [selectedIndex, setSelectedIndex] = useState(4);
  const [elements, setElements] = useState([1, 2, 3, 4, 5, 6, 7]);
  const changeSelectedOption = (e, data) => {
    console.log(e.target.id, "id");
    setSelectedIndex(+e.target.id);
    switch (+e.target.id) {
      case 1: {
        setElements([5, 6, 7, 1, 2, 3, 4]);
        break;
      }
      case 2: {
        setElements([6, 7, 1, 2, 3, 4, 5]);
        break;
      }
      case 3: {
        setElements([7, 1, 2, 3, 4, 5, 6]);
        break;
      }
      case 4: {
        setElements([1, 2, 3, 4, 5, 6, 7]);
        break;
      }
      case 5: {
        setElements([2, 3, 4, 5, 6, 7, 1]);
        break;
      }
      case 6: {
        setElements([3, 4, 5, 6, 7, 1, 2]);
        break;
      }
      case 7: {
        setElements([4, 5, 6, 7, 1, 2, 3]);
        break;
      }
      default: {
        console.log("No Option");
      }
    }
  };
  return (
    <div className="container-fluid">
      <div className="container">
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
      <div className="row">
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
                selectedIndex === el
                  ? "selector-options active-selector-option"
                  : "selector-options"
              }
              key={el}
              id={el}
              onClick={changeSelectedOption}
            >
              <img id={el} src={data[el - 1].icon} />
              <div id={el}>{data[el - 1].text}</div>
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
                now={10 * selectedIndex}
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
                now={4 * selectedIndex}
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
                now={13 * selectedIndex}
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
                now={5 * selectedIndex}
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
