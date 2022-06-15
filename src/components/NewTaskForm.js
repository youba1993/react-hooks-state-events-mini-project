import React, { useState } from "react";


function NewTaskForm({categories, onTaskFormSub}) {
  const [form, setForm ] = useState({
    text: "",
    category: "Code"
  });

  

  function handleClick(event){
    const name = event.target.name
    let value = event.target.value
    setForm({
      ...form,
      [name]: value,
    })
  }
  const newItem = {
    text: form.text,
    category: form.category,
  };
  
  function onTaskFormSubmit(event){
    event.preventDefault();
    onTaskFormSub(newItem)
  }
  
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleClick} />
      </label>
      <label>
        Category
        <select onChange={handleClick} name="category">
            {categories.slice(1).map((item, index)=> 
            <option value={item} key={index}>{item}</option>
            )}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={onTaskFormSubmit} />
    </form>
  );
}

export default NewTaskForm;
