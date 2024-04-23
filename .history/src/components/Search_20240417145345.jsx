import React, { useState } from "react";
import { connect } from "react-redux";
const Search = (props) => {
  let [strSearch, setStrSearch] = useState("");

  function handleChange(e) {
    setStrSearch(e.target.value);
    props.handleSearch(e.target.value);
  }

  return (
    <div>
      <form className="d-flex" role="search">
        <input
          onChange={handleChange}
          className="form-control"
          type="search"
          id="inputSearch"
          placeholder="Tìm kiếm...."
          aria-label="Search"
          value={strSearch}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.state,
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     goSearch: (search) => {
//       dispatch(actSeach(search));
//     },
//   };
// };

export default connect(mapStateToProps, null)(Search);
