import React , { useState } from "react";
import Task from "./Task";

function TaskList({tasks}) {

  function handleRemove(e){
  e.target.parentNode.remove()
  }
  
  return (
    <div className="tasks">
      {tasks.map((task, index)=>
        <Task key={index} id={index} text={task.text} category={task.category} handleRemove={handleRemove} />
      )}  
    </div>
  );
}

export default TaskList;
