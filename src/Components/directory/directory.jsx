import * as React from "react";
import CategoryItem from "../categories-item/category-item-comp";
import "./directory-style.css";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
