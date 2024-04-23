import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actSeach } from "./../actions/index";

const Search = () => {
  const dispatch = useDispatch();
  const [searchStr, setSearchStr] = useState("");

  function handleChange(e) {
    setStrSearch(e.target.value);
    dispatch(actSeach(searchStr));
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
