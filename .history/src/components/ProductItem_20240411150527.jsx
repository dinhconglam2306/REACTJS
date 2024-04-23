import React from "react";

const ProductItem = (props) => {
  const item = props.item;
  console.log(item.url);
  return (
    <div className="col-md-4 col-6 mb-3">
      <div className="thumb bg-white rounded overflow-hidden">
        <img
          src="./images/cannon_eos_camera.png"
          className="img-fluid"
          alt="..."
        />
      </div>
      <div className="info mt-2">
        <h5>{item.name}</h5>
        <p>${item.price}</p>
        <button type="button" className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
