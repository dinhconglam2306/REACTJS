import React, { useState } from "react";
import { countBy } from "lodash";

const Cart = (props) => {
  const totalItems = props.cartItems.length;
  const cartItems = props.cartItems;

  // Sử dụng hàm countBy từ lodash để đếm số lần xuất hiện của mỗi sản phẩm
  const itemCounts = countBy(cartItems, "id");
  // Chuyển đổi đối tượng thành mảng và thêm thông tin về số lượng của mỗi sản phẩm

  console.log(Object.keys(itemCounts));
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
