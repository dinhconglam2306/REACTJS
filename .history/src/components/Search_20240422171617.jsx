import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actSeach } from "./../actions/index";

const Search = () => {
  const dispatch = useDispatch();
  let [strSearch, strSearch] = useState("");

  function handleChange(e) {
    strSearch(e.target.value);
    dispatch(actSeach(strSearch));
  }
  return (
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
  );
};

export default Search;
