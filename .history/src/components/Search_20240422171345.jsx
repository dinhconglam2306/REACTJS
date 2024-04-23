import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actSeach } from "./../actions/index";

const Search = () => {
  const dispatch = useDispatch();
  const [searchStr, setSearchStr] = useState("");

  function handleChange(e) {
    dispatch(actSeach(searchStr));
    setStrSearch(e.target.value);
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
      />
    </form>
  );
};

export default Search;
