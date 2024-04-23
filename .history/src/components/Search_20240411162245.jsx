import React, { useState } from "react";

const Search = (props) => {
  let [strSearch, setStrSearch] = useState("");
  function handleChange(e) {
    setStrSearch(e.target.value);
    // props.handleSearch(strSearch);
  }

  function handleSubmit() {
    props.onChange(strSearch);
  }

  return (
    <div>
      <form onChange={handleSubmit} className="d-flex" role="search">
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
