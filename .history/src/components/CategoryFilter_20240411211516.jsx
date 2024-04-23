import React, { useEffect, useState } from "react";

const CategoryFilter = () => {
  const [filterInfo, setFilterInfo] = useState({
    types: [],
    // response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { types } = filterInfo;
    if (checked) {
      setFilterInfo({
        types: [...types, value],
        // response: [...types, value],
      });
    } else {
      setFilterInfo({
        types: types.filter((e) => e !== value),
        // response: types.filter((e) => e !== value),
      });
    }
  };

  console.log(filterInfo);

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
            name="chkCameras"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="chkCameras">
            {" "}
            Camera{" "}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input checkbox-category"
            type="checkbox"
            defaultValue="smartphones"
            id="chkSmartphones"
            name="chkSmartphones"
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
            name="chkGames"
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
            name="chkTelevisions"
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

export default CategoryFilter;
