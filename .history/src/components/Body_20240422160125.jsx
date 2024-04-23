import React from "react";
import Category from "./Category";
import List from "./List";

const Body = () => {
  return (
    <section className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <Category></Category>
          <List></List>
        </div>
      </div>
    </section>
  );
};

export default Body;
