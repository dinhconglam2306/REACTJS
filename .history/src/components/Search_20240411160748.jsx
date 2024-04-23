import React, { useState } from "react";

const Search = (props) => {
  let [strSearch, setStrSearch] = useState("");
  function handleChange(e) {
    setStrSearch(e.target.value);
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
        />
      </form>
    </div>
  );
};

export default Search;
