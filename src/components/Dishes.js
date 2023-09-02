import React from 'react'

function Dishes({description, price, dish, key, imagURL, ShowDishInfo, setChosenCat}) {
  return (
    <div className='SelectedImages-container' data-description={description} data-price={price} data-dish={dish} key={key} 
          onMouseEnter={(event) => ShowDishInfo(event, setChosenCat)}
        >
         <div className='SelectedImages__bgColor'></div>
  
          <img src={imagURL} alt={dish} className='SelectedImages--DishImage'  key={dish}/>
        </div>
  )
}

export default Dishes