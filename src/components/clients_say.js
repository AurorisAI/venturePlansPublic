import React from "react";

import ClientCard from "./clients_card";

import { useStaticQuery, graphql } from "gatsby";

const ClientsSay = () => {
  const data = useStaticQuery(graphql`
    query ClientsQuery {
      allGoogleReview {
        edges {
          node {
            ...ClientInformation
          }
        }
      }
    }
  `);

  return (
    <div className="container-fluid">
      <div className="container">
        <p className="valuesAndOverview">
          WHAT OUR CLIENTS SAY <span className="blueText">ABOUT US</span>
        </p>
      </div>
      <br />
      <br />
      <br />
      <div
        className="row clientsMarginsAndWidth"
        style={{ overflowX: "scroll", height: "500px" }}
      >
        {data.allGoogleReview.edges.map(({ node }, index) => (
          <div className="col">
            <ClientCard key={index} client={node} />
            <br />
          </div>
        ))}
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

export default ClientsSay;
