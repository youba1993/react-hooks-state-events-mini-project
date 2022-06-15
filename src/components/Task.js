import React from "react";

function Task({text,category, handleRemove, id}) {
  
  function handleRemoveChange(e){
      handleRemove(e)
  }
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleRemoveChange} value={id}>X</button>
    </div>
  );
}

export default Task;
