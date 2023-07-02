import React from "react";
import "./category-item-style.css";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div>
      <div className="card">
        <img src={`${imageUrl}`} className="card-img-top" alt={`${title}`} />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">Shop Now</p>
        </div>
      </div>
    </div>
  );
};
export default CategoryItem;
