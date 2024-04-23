import React from "react";
import cannon from "../images/cannon_eos_camera.png";

const ProductItem = (props) => {
  const item = props.item;
  const url = `./${item.url}`;
  console.log(url);
  return (
    <div className="col-md-4 col-6 mb-3">
      <div className="thumb bg-white rounded overflow-hidden">
        <img src={cannon_eos_camera.png} className="img-fluid" alt="..." />
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
