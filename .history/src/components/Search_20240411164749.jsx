import React, { useState } from "react";

const Search = (props) => {
  let [strSearch, setStrSearch] = useState("");
  function handleChange(e) {
    setStrSearch(e.target.value);
    handleSubmit(strSearch);
    console.log(e.target.value);
    console.log(strSearch);
  }

  function handleSubmit(value) {
    props.onChange(value);
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
