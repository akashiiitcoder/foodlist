import {CREATE_DISH, GET_DISH, UPDATE_DISH, DELETE_DISH} from '../constant/types';
const initialState = {
  dishes: [
    {
      "id": 1,
      "name": "Pizza",
      "protein": 10,
      "fat": 30,
      "carb":20
    },
    {
      "id": 2,
      "name": "Macroni",
      "protein": 10,
      "fat": 20,
      "carb":30
    }
  ],
  dish:null 
}

const dishReducer = (state = initialState, action) => {
  switch(action.type){
    case CREATE_DISH:
      return {
        ...state,
        dishes: [action.payload, ...state.dishes]
      } 
    case GET_DISH:
      let arr = state.dishes.filter(dish => dish.id == action.payload);//dish is a new variable name for each dish in contacys
      arr = arr[0];
      return{
        ...state,
        dish: arr,
      }
    case UPDATE_DISH:
      return{
        ...state,
        dishes: state.dishes.map((dish) => dish.id == action.payload.id ? action.payload : dish),
      }
    case DELETE_DISH:
      return{
        ...state,
        dishes: state.dishes.filter(dish => dish.id != action.payload)
      }
    default:
      return state;
  }
}

export default dishReducer;