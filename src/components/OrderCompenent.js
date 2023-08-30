import React, {useState} from "react";
import SelectCategory from './SelectCategory'
import ShowSelectedCategory from './ShowSelectedCategory'
import Card from './Card'

import { Starters, MainCourse, desserts, drinks } from "../Data/MenuData";
import '../styles/OrderCompenent.scss'
const OrderCompenent = () => {
  const Categories = [
    Starters,
    MainCourse,
    desserts,
    drinks
  ];

const [SelcetCategory, SetSelectedCategory] = useState(Categories[0])

  return (
    <div className='Order-container'>
      <h2 className='Order-container--Category-title'> Category</h2>
        <SelectCategory  Categories={Categories}  SetSelectedCategory={SetSelectedCategory} />

        <h2 className='Order-container--showSelectedCategories'> Dishes && Drinks</h2>
        <ShowSelectedCategory SelcetCategory={SelcetCategory} />

        <Card />

    </div>
  )
}

export default OrderCompenent