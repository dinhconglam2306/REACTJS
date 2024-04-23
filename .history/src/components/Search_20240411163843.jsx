import React, { useState } from "react";

const Search = (props) => {
  let [strSearch, setStrSearch] = useState("");
  function handleChange(e) {
    setStrSearch(e.target.value);
    console.log(strSearch);
    handleSubmit();
  }

  function handleSubmit() {
    props.onChange(strSearch);
  }

  return (
    <div>
      <form onChange={handleChange} className="d-flex" role="search">
        <input
          onChange={handleSubmit}
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
