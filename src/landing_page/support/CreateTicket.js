import React from "react";

const ticketCategories = [
  {
    title: "Account Opening",
    icon: "fa-plus-circle",
    desc: "Issues related to opening a new account",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Trading & Orders",
    icon: "fa-line-chart",
    desc: "Problems while placing or managing trades",
    links: [
      "Placing orders",
      "Order rejections",
      "Intraday & CNC trades",
      "Margins explained",
      "Cover & Bracket orders",
    ],
  },
  {
    title: "Funds & Banking",
    icon: "fa-bank",
    desc: "Deposit, withdrawal & bank related help",
    links: [
      "Add funds",
      "Withdraw funds",
      "Bank account change",
      "UPI issues",
      "Fund statement",
    ],
  },
  {
    title: "Kite & Platforms",
    icon: "fa-desktop",
    desc: "Kite, Console & other tools",
    links: [
      "Kite login issues",
      "Charts & indicators",
      "Mobile app help",
      "Platform charges",
    ],
  },
  {
    title: "Profile & KYC",
    icon: "fa-id-card",
    desc: "Update personal & KYC details",
    links: [
      "PAN update",
      "Address change",
      "Nominee details",
      "Email & mobile update",
    ],
  },
  {
    title: "Reports & Taxes",
    icon: "fa-file-text",
    desc: "Statements, reports & taxation",
    links: [
      "Contract notes",
      "P&L report",
      "Tax P&L",
      "Holding statement",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container my-5">
      <h1 className="fs-2 mb-4 text-center">
        To create a ticket, select a relevant topic
      </h1>

      <div className="row">
        {ticketCategories.map((item, index) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4"
            key={index}
          >
            <div className="ticketCard h-100">
              <h4>
                <i className={`fa ${item.icon} me-2`} aria-hidden="true"></i>
                {item.title}
              </h4>

              <p className="ticketDesc">{item.desc}</p>

              {item.links.map((link, i) => (
                <a href="/" key={i} className="ticketLink">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
