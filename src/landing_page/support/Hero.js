import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      
      {/* Top Bar */}
      <div className="supportWrapper">
        <h4>Support Portal</h4>
        <a href="/">Track Tickets</a>
      </div>

      {/* Main Content */}
      <div className="row supportContent">
        
        {/* Left Section */}
        <div className="col-lg-6 col-md-12 supportLeft">
          <h1>
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
          />

          <div className="supportLinks">
            <a href="/">Track account opening</a>
            <a href="/">Track segment activation</a>
            <a href="/">Intraday margins</a>
            <a href="/">Kite user manual</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 supportRight">
          <h2>Featured</h2>
          <ol>
            <li>
              <a href="/">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="/">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;
