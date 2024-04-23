import React from "react";

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
