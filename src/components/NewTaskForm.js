import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [categorySelect, setCategorySelect] = useState("");

  function handleCategorySelect(e) {
    setCategorySelect(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: text,
      category: categorySelect,
    };

    onTaskFormSubmit(newTask);
    setText("");
    setCategorySelect("");
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={categorySelect}
          onChange={handleCategorySelect}
        >
          {categories.map((category, index) =>
            category !== "All" ? <option key={index}>{category}</option> : null
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
