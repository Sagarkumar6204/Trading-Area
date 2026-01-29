import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div className="row p-5 mt-5 border-border-bottom text-center  ">
        <h1>Pricing</h1>
        <h3 className="text-muted fs-5 mt-3">Free equity investment and flat ₹20 traday and F&O trades </h3>
        </div>
        <div className="row  mt-5 text-center">
        <div className=" col-4 p-5 col-md-4 col-sm-12 ">
         <img className="img-fluid" src="media/images/pricingEquity.svg" alt=""/>
         <h2 className="text-nowrap">Free equity delivery</h2>
         <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

          <div className=" p-5  col-4 col-md-4 col-sm-12">
          <img className="img-fluid" src="media/images/intradayTrades.svg" alt=""/>
         <h2 className="text-nowrap">Intraday and F&O trades</h2>
         <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
          <div className=" p-5  col-4 col-md-4 col-sm-12">
         <img className="img-fluid" src="media/images/pricingEquity.svg" alt=""/>
         <h2 className="text-nowrap">Free direct MF</h2>
         <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
