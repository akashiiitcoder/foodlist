import React from 'react'
import {Link} from 'react-router-dom'
import {deleteDish} from '../../actions/dishAction'
import {useDispatch} from 'react-redux'

const Dish = ({dish}) => {//dish is the variable name of the props.dishy. dish is defined in Dishes
  const dispatch = useDispatch();
  const {id, name, protein, fat, carb} = dish;
  const cal = 4*protein + 9*fat + 4*carb;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input"></input>
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>{name}</td>
      <td>{protein}</td>
      <td>{fat}</td>
      <td>{carb}</td>
      <td>{cal}</td>
      <td className="actions">
        <Link to={`/admin/dishes/EditDish/${id}`}>
          <span className="material-icons" mr-2 >edit</span>
        </Link>
          <span className="material-icons" text-danger onClick={() => dispatch(deleteDish(id))}>remove_circle</span>
      </td>
    </tr>
  )
}

export default Dish
