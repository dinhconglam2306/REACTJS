import React from "react";
import Search from "./Search";
import Cart from "./Cart";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar sticky-top bg-black border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand">ZendVN Shop</a>
          <Cart></Cart>
          <Search searchItems={searchItems}></Search>
        </div>
      </nav>
    </div>
  );
};

export default Header;
