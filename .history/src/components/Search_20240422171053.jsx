import React from "react";

const Search = () => {
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
