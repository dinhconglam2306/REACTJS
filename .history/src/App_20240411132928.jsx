const path = process.env.PUBLIC_URL;
console.log(path);

function App() {
  return (
    <div>
      <nav
        className="navbar sticky-top bg-black border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand">ZendVN Shop</a>
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
      <section className="bg-dark text-white py-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 mb-3">
              <h4>Danh mục</h4>
              <div id="filterCategory">
                <div className="form-check">
                  <input
                    className="form-check-input checkbox-category"
                    type="checkbox"
                    defaultValue="cameras"
                    id="chkCameras"
                  />
                  <label className="form-check-label" htmlFor="chkCameras">
                    {" "}
                    Cameras{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input checkbox-category"
                    type="checkbox"
                    defaultValue="smartphones"
                    id="chkSmartphones"
                  />
                  <label className="form-check-label" htmlFor="chkSmartphones">
                    {" "}
                    Smartphones{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input checkbox-category"
                    type="checkbox"
                    defaultValue="games"
                    id="chkGames"
                  />
                  <label className="form-check-label" htmlFor="chkGames">
                    {" "}
                    Games{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input checkbox-category"
                    type="checkbox"
                    defaultValue="televisions"
                    id="chkTelevisions"
                  />
                  <label className="form-check-label" htmlFor="chkTelevisions">
                    {" "}
                    Televisions{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="row" id="productList">
                <div className="col-md-4 col-6 mb-3">
                  <div className="thumb bg-white rounded overflow-hidden">
                    <img
                      src="images/playstation_5.png"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="info mt-2">
                    <h5>Sony Playstation 5</h5>
                    <p>$499.99</p>
                    <button type="button" className="btn btn-primary">
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="col-md-4 col-6 mb-3">
                  <div className="thumb bg-white rounded overflow-hidden">
                    <img
                      src="./images/samsung_galaxy.png"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="info mt-2">
                    <h5>Samsung Galaxy</h5>
                    <p>$399.99</p>
                    <button type="button" className="btn btn-primary">
                      Add to cart
                    </button>
                  </div>
                </div>
                <div className="col-md-4 col-6 mb-3">
                  <div className="thumb bg-white rounded overflow-hidden">
                    <img
                      src="./images/cannon_eos_camera.png"
                      className="img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="info mt-2">
                    <h5>Cannon EOS Camera</h5>
                    <p>$749.99</p>
                    <button type="button" className="btn btn-primary">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
