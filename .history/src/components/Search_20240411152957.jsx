import React, { useState } from "react";

const Search = () => {
  let [strSearch, setStrSearch] = useState("");
  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="form-control"
          type="search"
          id="inputSearch"
          placeholder="Tìm kiếm...."
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default Search;
