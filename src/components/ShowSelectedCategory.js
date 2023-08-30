import React, { useEffect } from 'react';

const ShowDishInfo = (e) => {
    const HoveredElement = e.target
    const BackgoundCercle = HoveredElement.querySelector('.SelectedImages__bgColor')
    const Btn = document.createElement('button')
    const DishInfoContainer = document.createElement('div')
    DishInfoContainer.classList.add('SelectedImages--DishInfo')
    Btn.classList.add('SelectedImages--DishInfo-Btn')
    Btn.textContent = 'Add'
    DishInfoContainer.innerHTML = '<p>this is a test only to see if this crap not really works !!!</p>'
    HoveredElement.appendChild(DishInfoContainer)
    DishInfoContainer.appendChild(Btn)
    BackgoundCercle.style.display = 'none';

    HoveredElement.addEventListener('mouseleave', () => {
      BackgoundCercle.style.display = 'block';
        Btn.remove()
       DishInfoContainer.remove()



    } )

}


const AddEventListenerToImages = () => {  

    const SelectedImages = document.querySelectorAll('.SelectedImages-container');
    SelectedImages.forEach((element) => {
      element.addEventListener('mouseenter', ShowDishInfo);
    });

}

const ShowSelectedCategory = ({ SelcetCategory }) => {

    useEffect(() => {
AddEventListenerToImages()
}, [SelcetCategory]);

  return (
    <div className='SelectedImages'>
      {
      SelcetCategory.id.map(({ imagURL, dish }) => (
        <div className='SelectedImages-container' key={Math.random()}>
          <div className='SelectedImages__bgColor' key={Math.random() * 1000000}></div>
          <img src={imagURL} alt={dish} className='SelectedImages--DishImage' key={dish} />
        </div>
      ))}
    </div>
  );
};

export default ShowSelectedCategory;
