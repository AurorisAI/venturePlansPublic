export const navbarOptionNames = {
  BUSINESS_PLAN: "Business Plan",
  FINANCING: "Financing",
  INDUSTRY: "Industry",
  COVID_19_BUSINESS_IMPACT: "Covid 19 Business Impact",
  ABOUT: "About",
  CAREERS: "Careers",
  REVIEWS: "Reviews",
};
export const headerOverlayContentType = {
  LANGUAGES: "Languages",
  OFFICES: "Offices",
};
export const navbarOptions = [
  { name: navbarOptionNames.BUSINESS_PLAN, to: "#/business-plans" },
  { name: navbarOptionNames.FINANCING, to: "#/financing" },
  { name: navbarOptionNames.INDUSTRY, to: "#/industry" },
  {
    name: navbarOptionNames.COVID_19_BUSINESS_IMPACT,
    to: "#/covid-19-business-impact",
  },
  { name: navbarOptionNames.ABOUT, to: "#/about" },
  { name: navbarOptionNames.CAREERS, to: "#/careers" },
  { name: navbarOptionNames.REVIEWS, to: "#/reviews" },
];

export const offices = [
  { name: "Sarajevo", href: "#/sarajevo" },
  { name: "New York", href: "#/new-york" },
  { name: "London", href: "#/london" },
];
export const languages = [
  { name: "English", href: "#/english" },
  { name: "French", href: "#/french" },
  { name: "Spanish", href: "#/spanish" },
];
export const businessPlanMenu = {
  header: "Business Plans",
  rows: [
    [
      {
        name: "Investor Business Plans",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Immigration Business Plans",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "E2 Business Plans",
        href: "#/business-plan",
        type: "submenu",
      },
      {
        name: "EB1 Business Plans",
        href: "#/business-plan",
        type: "submenu",
      },
      {
        name: "EB5 Business Plans",
        href: "#/business-plan",
        type: "submenu",
      },
      {
        name: "L-1A & L-1B Business Plans",
        href: "#/business-plan",
        type: "submenu",
      },
    ],
    [
      {
        name: "SBA Lender Business Plans",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Marketing  Plan",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Restructuring Business Plan",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Franchising Plan",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Cannabis Business Plan",
        href: "#/business-plan",
        type: "menu",
      },
    ],
    [
      {
        name: "Request For Proposal",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Grant Business Plans",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Investor Pitch Deck",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Financial Proforma",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Prospectus",
        href: "#/business-plan",
        type: "menu",
      },
    ],
    [
      {
        name: "White Paper",
        href: "#/business-plan",
        type: "menu",
      },
    ],
  ],
};
export const financingMenu = {
  header: "Financing",
  rows: [
    [
      {
        name: "Private Placements",
        href: "#/financing",
        type: "menu",
      },
      {
        name: "Regulation D",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "506 (B) Relationship Investors ",
        href: "#/business-plan",
        type: "submenu",
      },
      {
        name: "506 (C) Advertised Offering",
        href: "#/business-plan",
        type: "submenu",
      },
      {
        name: "Grants",
        href: "#/business-plan",
        type: "submenu",
      },
    ],
    [
      {
        name: "Private Equity ",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Regulation S Offshore Offering",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Regulation A+ Crowd Funding",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Investment Portfolio & Deal Structuring ",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Private Placement Memorandum ",
        href: "#/business-plan",
        type: "menu",
      },
    ],
    [
      {
        name: "Mergers & Acquisitions",
        href: "#/business-plan",
        type: "menu",
      },
      {
        name: "Post Merger Integration",
        href: "#/business-plan",
        type: "submenu",
      },
      {
        name: "Diviestitures",
        href: "#/business-plan",
        type: "submenu",
      },
      {
        name: "Due Deligince Certification ",
        href: "#/business-plan",
        type: "submenu",
      },
    ],
  ],
};
