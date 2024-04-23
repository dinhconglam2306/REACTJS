import React from "react";
import Cart from "./Cart";

const Header = () => {
  return (
    <nav
      className="navbar sticky-top bg-black border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand">ディンコンラム Shop</a>
        <Cart></Cart>
        <form className="d-flex" role="search">
          <input
            className="form-control"
            type="search"
            id="inputSearch"
            placeholder="Tìm kiếm...."
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
