import React from "react";
import { connect } from "react-redux";

const Cart = (props) => {
  const { cartList } = props;
  const cartValues = Object.values(cartList);
  const totalCartValue = cartValues.length;

  let elmLI = (
    <li className="text-lg">
      <p className="text-center">Không có sản phẩm</p>
    </li>
  );

  if (cartValues.length > 0) {
    elmLI = cartValues.map((item) => (
      <li key={item.id}>
        <button className="dropdown-item" type="button">
          {`${item.name} (${item.count})`}
        </button>
      </li>
    ));
  }

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
          {totalCartValue}
        </span>
      </button>
      <ul className="dropdown-menu" id="cartList">
        {/* {cartValues.length === 0 && elmLI} */}
        {cartValues}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartList: state.cart,
  };
};

const ConnectedCart = connect(mapStateToProps, null)(Cart);
export default ConnectedCart;
