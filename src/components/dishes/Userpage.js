import React from 'react'
import { useSelector } from 'react-redux';
import Userdish from "./Userdish";
const Userpage = () => {
  const dishes = useSelector(state => state.dish.dishes);//fetch data directly from store, without using app.js
  //state stores whole state of the store
  return (
    <div>
      <table class="table shadow">
        <thead className='bg-danger text-white'>
          <tr>
            <th>Dish</th>
            <th>Protein(grams)</th>
            <th>Fat(grams)</th>
            <th>Carb(grams)</th>
            <th>Calories(Kcal)</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => (
              <Userdish dish={dish} key={dish.id}/> 
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Userpage


