import React from "react";
import { Container, Row, Col, ListGroupItem } from "react-bootstrap";

function FinancingMenu() {
  return (
    <Container>
      <Row>
        <Col xl={4}>
          <ListGroupItem>Private Placements</ListGroupItem>
          <ListGroupItem>Regulation D</ListGroupItem>
          <ListGroupItem className="navbar-overlay-submenu">
            506 (B) Relationship Investors
          </ListGroupItem>
          <ListGroupItem className="navbar-overlay-submenu">
            506 (C) Advertised Offering
          </ListGroupItem>
          <ListGroupItem className="navbar-overlay-submenu">
            Grants
          </ListGroupItem>
        </Col>
        <Col xl={4}>
          <ListGroupItem>Private Equity</ListGroupItem>
          <ListGroupItem>Regulation S Offshore Offering</ListGroupItem>
          <ListGroupItem>Regulation A+ Crowd Funding</ListGroupItem>
          <ListGroupItem>
            Investment Portfolio & Deal Structuring{" "}
          </ListGroupItem>
          <ListGroupItem>Private Placement Memorandum</ListGroupItem>
        </Col>
        <Col xl={4}>
          <ListGroupItem>Mergers & Acquisitions </ListGroupItem>
          <ListGroupItem className="navbar-overlay-submenu">
            Post Merger Integration
          </ListGroupItem>
          <ListGroupItem className="navbar-overlay-submenu">
            Diviestitures
          </ListGroupItem>
          <ListGroupItem className="navbar-overlay-submenu">
            Due Deligince Certification
          </ListGroupItem>
        </Col>
      </Row>
    </Container>
  );
}

export default FinancingMenu;
