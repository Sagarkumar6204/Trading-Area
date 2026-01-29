import React from "react";

function Rightimage({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <a
            href={learnMore}
            className="text-decoration-none d-inline-block mt-3"
          >
            Learn More →
          </a>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Rightimage;
