import React, { useEffect, useState } from "react";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
function CompanyOverview() {
    const [open, setOpen] = useState(false);

    return (
        <div className="container companyoverview"
             data-sal="slide-down"
             data-sal-delay="300"
             data-sal-easing="ease">
            <p className="valuesAndOverview">
                OUR COMPANY <span className="blueText">OVERVIEW</span>
            </p>
            <p className="col-md-12 companyoverviewText">
                Venture Plans is a  sophisticated team of diverse industry-specific consultants with a deep focus in finance, legal advisory and digital innovation. Our executive-level consultants are ivy league trained with institutional-caliber capabilities. We enable the best possible outcomes through value-based methodologies that succinctly capture the maximum value of your principals, intellectual property, business performance, markets, and outlook.
                </p>

            <Collapse in={open} className="col-md-12">

                <div id="example-collapse-text" className="companyoverviewText" >
                    <p>
                        Venture Plans Supports high-tech firms with an emphasis on growth, marketing, and go-to-market strategy focused through financial institutions and private equity. Through deep customer analysis and marketing best practices, we shape companies’ business strategies and digitally transform operation models to accelerate top-line growth. We provide data-backed insights to help companies win in the long term and recommend sustainable outcomes.
                        <br/><br/>
                        At venture Plans, we tailor your strategy with precision to meet your individual needs. We accelerate growth by encouraging our clients to avoid Cookie-cutter strategic planning as it delivers inferior results. With wider industry experience, Venture Plans has helped a wide array of clients thrive in hospitality, real estate, SaaS & technology, professional services, health care, cannabis, and many more. Our firm has access to industry-leading tools, databases, and analysis software that can provide market research data that is accurate and up-to-date. Our mission is to help companies build capabilities that will compete to win in the long term. Our mission is to help companies across all sectors transform and grow by developing new markets, optimizing sales, operations, technology, and financing.
                    </p>
                </div>
            </Collapse>
            <button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="colapseBtn col-md-12"
            >
                read more ▾
            </button>

        </div>
    );
}

export default CompanyOverview;
