import React, { useState } from "react";
import { connect } from "react-redux";
import { actSeach } from "./../actions/index";

const Search = (props) => {
  let [strSearch, setStrSearch] = useState("");
  console.log(props.search);

  function handleChange(e) {
    setStrSearch(e.target.value);
    props.goSearch(e.target.value);
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
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goSearch: (search) => {
      dispatch(actSeach(search));
    },
  };
};

const ConnectedSearch = connect(mapStateToProps, mapDispatchToProps)(Search);
export default ConnectedSearch;
