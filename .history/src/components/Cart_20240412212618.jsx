import React from "react";

const Cart = (props) => {
  const [totalItems, setTotalItems] = useState(0);
  console.log(props.cartItems.length);

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
          {props.cartItems.length}
        </span>
      </button>
      <ul className="dropdown-menu" id="cartList">
        <li>
          <button className="dropdown-item" type="button">
            PS5 (2)
          </button>
        </li>
        <li>
          <button className="dropdown-item" type="button">
            ABCD (1)
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
