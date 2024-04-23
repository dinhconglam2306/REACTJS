import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actSearch } from "./../actions/index";

const Search = () => {
  const dispatch = useDispatch();
  let [strSearch, setSearchStr] = useState("");

  function handleChange(e) {
    setSearchStr(e.target.value);
    dispatch(actSearch(e.target.value));
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
