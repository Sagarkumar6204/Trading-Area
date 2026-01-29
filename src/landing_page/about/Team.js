import React from 'react'

function Team() {
  return (
    <div className="container">
      <div className="row p-5   border-top">
        <h1 className="text-center  mb-0 ">
        People
        </h1>
      </div>
      <div
        className="row p-5   text-muted "
        style={{ lineHeight: "1.5", fontSize: "1.2em" }}
      >
        <div className="col-6  p-5  p-md-0   text-center">
          <img src='media/images/nithinKamath.jpg' alt='' className='' style={{borderRadius:"50%", width:"40%"}}/>
          <h4 className='mt-3'>Nithin Kamath</h4>
          <h6>Founder,CEO</h6>
        </div>
        <div className="col-6 p-5 p-md-0  ">
          <p>
           Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
           He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>Connect on <a href='/' className='text-decoration-none'>Homepage</a> /<a className='text-decoration-none' href='/'>TradingQnA</a>  /<a href='/' className='text-decoration-none'>Twitter</a> </p>
        </div>
      </div>
    </div>
  )
}

export default Team
