
const ShowDishInfo = (e, setChosenCat) => {
  const HoveredElement = e.currentTarget;
    const description = HoveredElement.dataset.description
    const price = HoveredElement.dataset.price
    const dishName = HoveredElement.dataset.dish
    const image = HoveredElement.querySelector('img').src
    const BackgoundCercle = HoveredElement.querySelector('.SelectedImages__bgColor')
    const Btn = document.createElement('button')
    const DishInfoContainer = document.createElement('div')
    DishInfoContainer.classList.add('SelectedImages--DishInfo')
    Btn.classList.add('SelectedImages--DishInfo-Btn')
    Btn.textContent = 'Add'
    DishInfoContainer.innerHTML = `<p>${description === undefined ? '' : description}</p>`
    HoveredElement.appendChild(DishInfoContainer)
    DishInfoContainer.appendChild(Btn)
    BackgoundCercle.style.display = 'none';
    Btn.addEventListener('click', ()=>{
      const newDish = {
        name: dishName,
        price: price,
        image: image,
        quantity: 1,
    };
  
    setChosenCat(prevChosenCat => [...prevChosenCat, newDish]);
    })

    HoveredElement.addEventListener('mouseleave', () => {
      BackgoundCercle.style.display = 'block';
        Btn.remove()
       DishInfoContainer.remove()



    } )


}


const ShowSelectedCategory = ({ SelcetCategory, setChosenCat }) => {


  return (
    <div className='SelectedImages'>
      {
      SelcetCategory.id.map(({ imagURL, dish, description, price}, index) => (
        <div className='SelectedImages-container' data-description={description} data-price={price} data-dish={dish} key={index} 
          onMouseEnter={(event) => ShowDishInfo(event, setChosenCat)}
        >
          <div className='SelectedImages__bgColor'></div>
          <img src={imagURL} alt={dish} className='SelectedImages--DishImage'  key={dish}/>
        </div>
      ))}
    </div>
  );
};

export default ShowSelectedCategory;
