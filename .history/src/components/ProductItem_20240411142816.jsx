import React from "react";

const ProductItem = (props) => {
  const item = props.item;
  const name = props.item.name;
  const url = props.item.url;
  const price = props.item.price;
  return (
    <div className="col-md-4 col-6 mb-3">
      <div className="thumb bg-white rounded overflow-hidden">
        <img src="images/playstation_5.png" className="img-fluid" alt="..." />
      </div>
      <div className="info mt-2">
        <h5>{item.name}</h5>
        <p>$499.99</p>
        <button type="button" className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
