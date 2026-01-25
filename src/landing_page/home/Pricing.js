import React from "react";

function Pricing() {
  return (
    <div className="container my-5 p-3">
      <div className="row align-items-center p-5">
        {/* Left Content */}
        <div className="col-lg-4 col-md-12 mb-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/a" className="text-decoration-none">
            See Pricing →
          </a>
        </div>

        {/* Right Content */}
        <div className="col-lg-8 col-md-12">
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              
              <img
                src="https://zerodha.com/static/images/pricing-eq.svg"
                alt="Equity delivery"
                className=" w-50 h-50"
              />
              <p className="small fs-6 ">Free account opening</p>
            </div>

            <div className="col-md-4 mb-3">
              <img
                src="https://zerodha.com/static/images/pricing-eq.svg"
                alt="Intraday trading"
                className=" w-50 h-50"
              />
              <p className="small fs-6">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            <div className="col-md-4 mb-3 ">
              <img
                src="https://zerodha.com/static/images/other-trades.svg"
                alt="No hidden charges"
                className=" w-50 h-50"
              />
              <p className="small fs-6">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
