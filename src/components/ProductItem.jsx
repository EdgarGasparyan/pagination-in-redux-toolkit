import React from "react";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";

const ProductItem = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {props.product?.map((prod, index) => (
            <div
              className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3"
              key={prod.id}
            >
              <div className="card">
                <div>
                  <Slider {...settings}>
                    {prod.images.map((picture) => (
                      <div className="product-item-picture">
                        <img src={picture} alt="picture" />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="card-body">
                  <h4 className="card-title">{prod.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <Rating
                      name="half-rating-read"
                      defaultValue={prod.rating}
                      precision={0.5}
                      readOnly
                    />
                  </h6>
                  <p className="card-text">{prod.description}</p>
                  <div className="options d-flex flex-fill"></div>
                  <div className="buy d-flex justify-content-between align-items-center">
                    <div className="price text-success">
                      <h5 className="mt-4">${prod.price}</h5>
                    </div>
                    <a href="#" className="btn btn-danger mt-3">
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
