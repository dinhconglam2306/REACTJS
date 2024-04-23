import React from "react";
import Cart from "./Cart";
import Search from "./Search";

const Header = () => {
  return (
    <nav
      className="navbar sticky-top bg-black border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand">ディンコンラム Shop</a>
        <Cart></Cart>
        <Search></Search>
      </div>
    </nav>
  );
};

export default Header;
