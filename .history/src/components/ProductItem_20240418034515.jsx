import React, { useState } from "react";
import { connect } from "react-redux";
import { actAddItem } from "./../actions/index";

const ProductItem = (props) => {
  const { item, onClickAdd } = props;
  const [cartList, setCartList] = useState([]);

  function handleAddToCart(item) {
    console.log(item);
    // const existingItem = cartList.findIndex(
    //   (checkItem) => checkItem.id === item.id
    // );
    // if (existingItem !== -1) {
    //   cartList[existingItem].count += 1;
    //   setCartList([...cartList]);
    // } else {
    //   setCartList([...cartList, { ...item, count: 1 }]);
    // }
    // props.addToCart(cartList);
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
  console.log(state.cart);
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
