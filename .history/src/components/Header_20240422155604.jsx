import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar sticky-top bg-black border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand">ディンコンラム Shop</a>
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
            <li>
              <button className="dropdown-item" type="button">
                Sony Vega (1)
              </button>
            </li>
          </ul>
        </div>
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
