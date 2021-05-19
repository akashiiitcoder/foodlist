import {CREATE_DISH, GET_DISH, UPDATE_DISH, DELETE_DISH} from '../constant/types';
//actions
export const addDish = (dish) => {
  return {
    type: CREATE_DISH,
    payload: dish//payload is the thing we need to add here
  }
}

//get a dish
export const getDish = (id) => ({
  type: GET_DISH,
  payload: id//payload is the the id for which we need to get information
})

//  update a dish
export const updateDish = (dish) => ({
  type: UPDATE_DISH,
  payload:dish
})

//delete a dish
export const deleteDish = (id) => ({
  type: DELETE_DISH,
  payload: id
})

