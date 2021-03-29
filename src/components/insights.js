import React from "react";
import InsightsCard from "./insights_card";

import StocksImg from '../images/stocks.jpg'
import TechnologyImg from '../images/technology.jpg'
import SkyscraperImg from '../images/skyscraper2.jpg'
import SimulationImg from '../images/simulation.jpg'

const Insights = () => (
  <div className="container-fluid" style={{position:'relative',alignItems:"center",justifyContent:"center"}}>
    <div className="container">
      <p className="valuesAndOverview">OUR LATEST INSIGHTS</p>
    </div>
    <br />
    <br />
    <div className="row insightsPosition">
        <div className="card-group">
      <div className="col">
        <InsightsCard
          image={StocksImg}  
          blueText="How wealthy individuals can contribute to the overall economic growth cycle"
          boldText="Redesigned Account Planning Transforms an IT Company's Performance"
          text="New tools and strategies boost year-on-year growth and reenergize the company's sales pipeline"
        />
        <br />
      </div>
      <div className="col">
        <InsightsCard
          image={TechnologyImg}  
          blueText="Top 10 Industries Of the Future And how it will impact you"
          boldText="Redesigned Account Planning Transforms an IT Company's Performance"
          text="New tools and strategies boost year-on-year growth and reenergize the company's sales pipeline"
        />
        <br />
      </div>
      <div className="col">
        <InsightsCard
          image={SkyscraperImg}  
          blueText="Key drivers for finding quality Talent for your business"
          boldText="Redesigned Account Planning Transforms an IT Company's Performance"
          text="New tools and strategies boost year-on-year growth and reenergize the company's sales pipeline"
        />
        <br />
      </div>

    </div>
    </div>
  </div>
);

export default Insights;
