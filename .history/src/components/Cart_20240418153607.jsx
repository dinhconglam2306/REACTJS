import React from "react";
import { connect } from "react-redux";

const Cart = (props) => {
  const cartItems = props.cartItems;
  const totalCartItems = cartItems.length;

  let elmLI = (
    <li className="text-lg">
      <p className="text-center">Không có sản phẩm</p>
    </li>
  );

  return (
    <div className="dropdown me-auto">
      <button
        className="btn btn-primary btn-sm dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa-solid fa-cart-shopping" />
        <span className="badge text-bg-danger" id="cartCount">
          {totalCartItems}
        </span>
      </button>
      <ul className="dropdown-menu" id="cartList">
        {cartItems.length === 0 && elmLI}
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <li key={item.id}>
              <button className="dropdown-item" type="button">
                {`${item.name} (${item.count})`}
              </button>
            </li>
          ))}
      </ul>
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

const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default ConnectedCart;
