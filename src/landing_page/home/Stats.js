
function Stats() {
  return (
    <div className="container my-5 p-3">
      <div className="row align-items-center p-5">
        
        {/* Left Content */}
        <div className="col-lg-4 col-sm-12 col-md-12 p-5 p-sm-0 ">
          <h1 className="text-nowrap mb-5 fs-2">Trust with confidence</h1>

          <h4 className="fs-3.5" >Customer-first, always</h4>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h4 className="mt-5 fs-3.5">No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, gamification, or annoying push notifications.
            High-quality apps that you use at your pace, the way you like.
          </p>

          <h4 className="mt-5 fs-3.5">The Zerodha universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h4 className="mt-5 fs-3.5">Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with
            your money.
          </p>
        </div>

        {/* Right Content */}
        <div className="col-lg-8 col-sm-12 col-md-12  p-sm-0 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid mb-4 "
            style={{ maxWidth: "90%" }}
          />

          <div className="d-flex justify-content-center gap-4 text-center">
            <a href="/a" className="text-decoration-none mx-5">
              Explore our products →
            </a>
            <a href="/aa" className="text-decoration-none">
              Try Kite →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
