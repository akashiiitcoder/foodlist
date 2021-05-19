import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {addDish} from '../../actions/dishAction'
import shortid from 'shortid';
import {useHistory} from 'react-router-dom'

const AddDish = () => {

  let history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carb, setCarb] = useState(0);

  const createContact = e => {
    e.preventDefault();
    const new_dish = {
      id: shortid.generate(),
      name: name,
      protein: protein, 
      fat: fat,
      carb: carb,
    }
    dispatch(addDish(new_dish));
    history.push('/admin')
  }
  

  return <div className="card border-0 shadow">
    <div className="card-header">
      Add a Dish
    </div>
    <div className="card-body">
      <form onSubmit = {(e) => createContact(e)}>
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
        <button className="btn btn-primary" type="submit">Add</button>
      </form>      
    </div>
    </div>
}

export default AddDish
