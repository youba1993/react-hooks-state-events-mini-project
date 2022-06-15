import React from "react";

function CategoryFilter({categories, handleCategory}) {

  function hundleButton(e){
      e.target.setAttribute("class","selected");
      handleCategory(e.target.name);
      }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((item, index)=> (
        <button name={item} key={index} onClick={hundleButton}>{item}</button>
      )
      )}
      
    </div>
  );
}

export default CategoryFilter;
