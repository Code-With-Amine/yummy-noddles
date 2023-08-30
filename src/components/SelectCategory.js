import React from 'react'

const SelectCategory = ({Categories, SetSelectedCategory}) => {


    const HandelSelecteChange = (event)=>{
        SetSelectedCategory(Categories[event.target.value])
    }

  return (
    <select className="Order-container--categories" defaultValue="Starters" onChange={HandelSelecteChange}>
      {Categories.map((category, index) => (
        <option key={category.name} value={index}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default SelectCategory;
