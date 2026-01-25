import React from 'react'

function Education() {
  return (
     <div className="container my-5 p-3 ">
      <div className="row align-items-center p-5 mb-5">
        {/* Right Content */}
        <div className="col-lg-6 col-md-12 mb-5">
          <img src='media/images/education.svg' alt='' style={{width:"905"}}/>
          </div>
       
        {/* Left Content */}
        <div className="col-lg-6 col-md-12 mb-5 ">
          <h1 className="mb-3 fs-2">Free and open market educationg</h1>
          <p className='mb-4'>
           Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="/a" className="text-decoration-none ">
            Varsity →
          </a>
          <p className='mt-5 mb-4'>
           TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="/a" className="text-decoration-none">
            TradingQ&A →
          </a>
        </div>
 </div>
        
      </div>
    
  )
}

export default Education
