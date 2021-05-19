import React from 'react'
import {useSelector} from 'react-redux';
import Dish from "./Dish";

const Dishes = () => {
  const dishes = useSelector(state => state.dish.dishes);//fetch data directly from store, without using app.js
  //state stores whole state of the store
  return (
    <div>
      <table className="table shadow">
        <thead className='bg-danger text-white'>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input type = "checkbox" className="custom-control-input"></input>
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th>Dish</th>
            <th>Protein(grams)</th>
            <th>Fat(grams)</th>
            <th>Carb(grams)</th>
            <th>Calories(Kcal)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => (
              <Dish dish={dish} key={dish.id}/> 
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dishes
