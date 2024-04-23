import React, { useState } from "react";
import { connect } from "react-redux";
import { actAddItem } from "./../actions/index";

const ProductItem = (props) => {
  console.log(próps);
  const { item, onClickAdd } = props;
  const [cartList, setCartList] = useState({});

  function handleAddToCart() {
    props.addToCart(item);
  }

  return (
    <div className="col-md-4 col-6 mb-3">
      <div className="thumb bg-white rounded overflow-hidden">
        <img src={item.url} className="img-fluid" alt="..." />
      </div>
      <div className="info mt-2">
        <h5>{item.name}</h5>
        <p>${item.price}</p>
        <button
          onClick={handleAddToCart}
          type="button"
          className="btn btn-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (item) => {
      dispatch(actAddItem(item));
    },
  };
};

const ConnectedSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);
export default ConnectedSearch;
