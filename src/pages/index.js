import * as React from "react";

import SEO from "../components/seo";
import Header from "../components/header/header";
import CustomJumbotron from "../components/custom_jumbotron";
import CoreValues from "../components/core_values";
import CompanyOverview from "../components/company_overview";
import Comp from "../components/comp";
import Career from "../components/career";
import Subscribe from "../components/subscribe";
import Consultation from "../components/consultation";
import ClientsSay from "../components/clients_say";
import ReadyToTalk from "../components/ready_to_talk";
import SliderMenu from "../components/sliderMenu";
import Sectors from "../components/sectors";
import Insights from "../components/insights";
import Footer from "../components/footer";
import Logos from "../components/logos";
import Tabs from "../components/imageSlider";

const IndexPage = () => (
  <div>
    <Header />
    <SEO title="Home" />
    <Tabs />

    <Comp />
    <div className="container">
      <p className="verticalLineLeft" style={{ textAlign: "center" }}>
        Across sectors, we indetify new markets, scale revenue, improve
        operations and provide financing support
      </p>
    </div>
    <CoreValues />
    <CompanyOverview />
    <SliderMenu />
    <ClientsSay />
    <ReadyToTalk />
    <Consultation />
    <Sectors />
    <Insights />
    <Subscribe />
    <Career />
    <Logos />
    <Footer />
  </div>
);

export default IndexPage;
