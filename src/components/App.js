import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
   const [tasksList, setTasksList] = useState(TASKS)
  function handleCategory(name = "All"){
      
      setTasksList( TASKS.filter((item)=>{ 
      if (name === "All") return true;
      return (item.category === name);
        }))
  }

  function onTaskFormSubmit(newItem){
      setTasksList([...tasksList, newItem]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleCategory={handleCategory} categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSub={onTaskFormSubmit} />
      <TaskList tasks={tasksList} />
    </div>
  );
}

export default App;
