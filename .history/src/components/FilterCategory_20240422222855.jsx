import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actFilter } from "./../actions/index";

const FilterCategory = () => {
  const [filterInfo, setFilterInfo] = useState({
    types: [],
  });
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { types } = filterInfo;
    let updatedTypes = [];
    if (checked) {
      updatedTypes = [...types, value];
    } else {
      updatedTypes = types.filter((type) => type !== value);
    }

    setFilterInfo({ types: updatedTypes });
    props.goFilter(updatedTypes);
  };

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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
