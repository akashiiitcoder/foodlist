import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getDish, updateDish} from '../../actions/dishAction'
import shortid from 'shortid';
import {useHistory} from 'react-router-dom'
import { useParams  } from 'react-router-dom'

const EditDish = () => {

  let {id} = useParams();

  let history = useHistory();
  const dispatch = useDispatch();
  const dish = useSelector(state => state.dish.dish);
  const [name, setName] = useState("");
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carb, setCarb] = useState(0);

  
  useEffect(() => {//doubt
    if(dish!=null){
      setName(dish.name);
      setCarb(dish.carb);
      setProtein(dish.protein);
      setFat(dish.fat);
    }
    dispatch(getDish(id));
  },[dish])

  const onUpdateDish = (e) => {
    e.preventDefault();
    const update_dish = Object.assign(dish, {
      name: name,
      protein: protein,
      fat: fat,
      carb: carb
    })
    // dispatch(updateDish(update_dish));
    history.push("/admin");
  }
  return <div className="card border-0 shadow">
    <div className="card-header">
      Edit Dish
    </div>
    <div className="card-body">
      <form onSubmit={(e) => onUpdateDish(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name of the dish"
            value={name}
            onChange={ (e) => setName(e.target.value)}
          >
          </input>
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control  "
            placeholder="Protein(grams)"
            value={protein}
            onChange={ (e) => setProtein(e.target.value)}
          >
          </input>
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control  "
            placeholder="Fat(grams)"
            value={fat}
            onChange={ (e) => setFat(e.target.value)}
          >
          </input>
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control  "
            placeholder="Carb(grams)"
            value={carb}
            onChange={ (e) => setCarb(e.target.value)}
          >
          </input>
        </div>
        <button className="btn btn-primary" type="submit">Edit Dish</button>
      </form>      
    </div>
    </div>
}

export default EditDish
