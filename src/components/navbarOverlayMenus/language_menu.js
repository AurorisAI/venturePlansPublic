import React from "react";
import { Container, Row, Col, ListGroupItem } from "react-bootstrap";
import Flags from "country-flag-icons/react/3x2";

function LanguageMenu() {
  return (
    <Container fluid className="languages-overlay-menu">
      <Row>
        <Col xl={3}>
          <h4>Global</h4>
          <ListGroupItem>
            <Flags.US
              title="United States"
              className="navbar-menu-country-flags"
            />
            Global(English)
          </ListGroupItem>
        </Col>
        <Col xl={3}>
          <h4>North & South America</h4>
          <ListGroupItem>
            <Flags.BR className="navbar-menu-country-flags" />
            Brazil(Portuges)
          </ListGroupItem>
          <ListGroupItem>
            <Flags.AR className="navbar-menu-country-flags" />
            Argentina (Espanol)
          </ListGroupItem>
          <ListGroupItem>
            <Flags.CH className="navbar-menu-country-flags" />
            Chile (Espanol)
          </ListGroupItem>
          <ListGroupItem>
            <Flags.CO className="navbar-menu-country-flags" />
            Colombia (Espanol)
          </ListGroupItem>
        </Col>
        <Col xl={3}>
          <h4>Europe, Middle East & Africa</h4>
          <ListGroupItem>
            <Flags.FR className="navbar-menu-country-flags" />
            France (Français)
          </ListGroupItem>
          <ListGroupItem>
            <Flags.DE className="navbar-menu-country-flags" />
            Germany / Switzerland (Deutsch)
          </ListGroupItem>
          <ListGroupItem>
            <Flags.ES className="navbar-menu-country-flags" />
            Spain (Español)
          </ListGroupItem>
          <ListGroupItem>
            <Flags.RU className="navbar-menu-country-flags" />
            Russia (Русский)
          </ListGroupItem>
        </Col>
        <Col xl={3}>
          <h4>Asia & Australia</h4>
          <ListGroupItem>
            <Flags.CH className="navbar-menu-country-flags" />
            China (中文版)
          </ListGroupItem>
          <ListGroupItem>
            <Flags.KR className="navbar-menu-country-flags" />
            Korea (한국어)
          </ListGroupItem>
          <ListGroupItem>
            <Flags.JP className="navbar-menu-country-flags" />
            Japan (日本語)
          </ListGroupItem>
        </Col>
      </Row>
    </Container>
  );
}

export default LanguageMenu;
