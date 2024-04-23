import React from "react";
import { countBy } from "lodash";

const Cart = (props) => {
  const totalItems = props.cartItems.length;
  const cartItems = props.cartItems;

  const uniqueItems = [];
  cartItems.forEach((item) => {
    const { id, name } = item;
    // Kiểm tra xem item đã tồn tại trong mảng kết quả chưa
    const existingItem = uniqueItems.findIndex(
      (checkItem) => checkItem.id === id
    );
    console.log(checkItem);
    // Nếu chưa tồn tại, thêm vào mảng kết quả
    if (existingItem === -1) {
      uniqueItems.push({ id, count: 1, name });
    } else {
      // Nếu tồn tại, tăng số lần xuất hiện lên 1
      uniqueItems[existingItem].count++;
    }
  });

  // const itemCounts = {};
  // cartItems.forEach((item) => {
  //   const id = item.id;
  //   if (itemCounts[id]) {
  //     itemCounts[id]++;
  //   } else {
  //     itemCounts[id] = 1;
  //   }
  // });

  // const uniqueItems = Object.keys(itemCounts).map((id) => ({
  //   id,
  //   count: itemCounts[id],
  // }));

  // const itemCounts = countBy(cartItems, "id");

  // const uniqueItems = Object.keys(itemCounts).map((itemId) => ({
  //   id: itemId,
  //   count: itemCounts[itemId],
  //   ...cartItems.find((item) => item.id === itemId),
  // }));

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
          {totalItems}
        </span>
      </button>
      <ul className="dropdown-menu" id="cartList">
        {uniqueItems.length === 0 && elmLI}
        {uniqueItems.length > 0 &&
          uniqueItems.map((item) => (
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

export default Cart;
