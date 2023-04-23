import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory }) {

  const newTasks =
    selectedCategory && selectedCategory !== "All"
      ? tasks.filter((task) => task.category === selectedCategory)
      : tasks;

  return (
    <div className="tasks">
      {newTasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
