import React from "react";
import ProductsHeader from "./components/ProductsHeader";
import ProductsCategory from "./components/ProductsCategory";
function App() {
  return (
    <div>
      {/* -------------------HEADER-START_----------------------- */}
      <ProductsHeader></ProductsHeader>
      {/* -------------------HEADER-END----------------------- */}
      <section className="bg-dark text-white py-3">
        <div className="container">
          <div className="row">
            {/* -------------------CATEGORY-START_----------------------- */}
            <ProductsCategory></ProductsCategory>
            {/* -------------------CATEGORY-END_----------------------- */}
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
