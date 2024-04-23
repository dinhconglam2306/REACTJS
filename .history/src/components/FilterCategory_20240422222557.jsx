import React from "react";
import { useDispatch } from "react-redux";
import { actFilter } from "./../actions/index";

const FilterCategory = () => {
  return (
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
  );
};

export default FilterCategory;
