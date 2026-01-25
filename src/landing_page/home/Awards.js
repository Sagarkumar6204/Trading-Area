import React from "react";

function Awards() {
  return (
    <div className="container my-5 p-3">
      <div className="row ">
        <div className="col-lg-6 col-sm-12 col-md-6 p-5">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all volumes in
            India daily by trading and investing in:
            <div className="row mt-3">
              <div className="col-lg-6 col-sm-12 col-md-6  ">
                <ul>
                  <li>
                    <p>Futures and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency deriva</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-12  ">
                <ul>
                  <li>
                    <p>Stocks and IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
              </div>
            </div>
            <img src="media/images/pressLogos.png" alt="" style={{width:"90%"}}/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Awards;
