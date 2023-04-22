import React, { useState } from "react";


function CategoryFilter({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleBtn(category) {
    setSelectedCategory(category);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleBtn(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
