
function Hero() {
  return (
    <div className="container p-3 mt-0">
      <div className="row text-center">
        <div className="row">
          <img src="media/images/homeHero.png" alt=""  className=""/>
          <h1 className="mt-0">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button style={{width:"13rem",margin:"0 auto"}} className="p-2 btn btn-primary fs-5 text-nowrap">Signup Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
