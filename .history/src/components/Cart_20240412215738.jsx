import React from "react";
import { countBy } from "lodash";

const Cart = (props) => {
  const totalItems = props.cartItems.length;
  const cartItems = props.cartItems;

  const itemCounts = countBy(cartItems, "id");

  const uniqueItems = Object.keys(itemCounts).map((itemId) => ({
    id: itemId,
    count: itemCounts[itemId],
    ...cartItems.find((item) => item.id === itemId),
  }));

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
          {totalItems}
        </span>
      </button>
      {cartItems > 0 && <ul className="dropdown-menu" id="cartList"></ul>}
    </div>
  );
};

export default Cart;
{
  uniqueItems.map((item) => (
    <li key={item.id}>
      <button className="dropdown-item" type="button">
        {`${item.name} (${item.count})`}
      </button>
    </li>
  ));
}
