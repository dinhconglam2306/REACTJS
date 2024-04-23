import React, { useState } from "react";
import { connect } from "react-redux";

const CategoryFilter = (props) => {
  const [filterInfo, setFilterInfo] = useState({
    types: [],
    response: [],
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
    props.handleFilter(updatedTypes);
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

const mapStateToProps = (state) => {
  console.log(state.filter);
  return {
    filter: state.filter,
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     goSearch: (search) => {
//       dispatch(actSeach(search));
//     },
//   };
// };

const ConnectedItems = connect(mapStateToProps, null)(CategoryFilter);
export default ConnectedItems;
