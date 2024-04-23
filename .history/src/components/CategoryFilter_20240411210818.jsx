import React, { useEffect, useState } from "react";

const CategoryFilter = () => {
  const [filterInfo, setFilterInfo] = useState({
    type: [],
    response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { type } = filterInfo;

    console.log(`${value} is ${checked}`);

    // if (checked) {
    //   setFilterInfo({
    //     languages: [...languages, value],
    //     response: [...languages, value],
    //   });
    // }
    // else {
    //   setFilterInfo({
    //     languages: languages.filter((e) => e !== value),
    //     response: languages.filter((e) => e !== value),
    //   });
    // }
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
