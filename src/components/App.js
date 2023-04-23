import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [myTasks, setMyTasks] = useState(TASKS);

  function onSelectCategory(category) {
    setSelectedCategory(category);
  }

  function onTaskFormSubmit(newTask) {
    setMyTasks([...myTasks, newTask]);
  }
  console.log(myTasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={myTasks} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
