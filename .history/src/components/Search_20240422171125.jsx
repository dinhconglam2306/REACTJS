import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  function handleChange(e) {
    setStrSearch(e.target.value);
    props.goSearch(e.target.value);
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
