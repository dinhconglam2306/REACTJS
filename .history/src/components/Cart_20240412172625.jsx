import React from "react";

const Cart = (props) => {
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
          0
        </span>
      </button>
      <ul className="dropdown-menu" id="cartList">
        <li>
          <button className="dropdown-item" type="button">
            PS5 (2)
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
