import React from "react";
import Search from "./Search";
import Cart from "./Cart";

const Header = (props) => {
  return (
    <div>
      <nav
        className="navbar sticky-top bg-black border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand">ラム Shop</a>
          <Cart cartItems={props.cartItems}></Cart>
          <Search></Search>
        </div>
      </nav>
    </div>
  );
};

export default Header;
