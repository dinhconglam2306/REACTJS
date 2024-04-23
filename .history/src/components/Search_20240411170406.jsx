import React, { useState } from "react";

const Search = (props) => {
  let [strSearch, setStrSearch] = useState("");

  function handleChange(e) {
    setStrSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Ngăn chặn form được gửi mặc định
    props.onChange(strSearch);
    console.log("Search :" + strSearch);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex" role="search">
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
