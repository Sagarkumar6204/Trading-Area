
function Leftimage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          {/* Links */}
          <div className="mt-3">
            <a href={tryDemo} className="text-decoration-none me-4">
              Try Demo →
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More →
            </a>
          </div>

          {/* Store Badges */}
          <div className="mt-4">
            <a href={googlePlay} className="me-4">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Leftimage;
