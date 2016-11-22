export default function ingredientReducer(state=[], action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return state.concat(action.payload);
    case 'REMOVE_INGREDIENT':
      let ingredientsarr = [...state.slice(0, action.payload), ...state.slice(action.payload+1)]
      return ingredientsarr
      // return state.map((ele, idx) =>{
      //   if(idx !== action.payload){
      //     return ele
      //   }
      // })
    default:
      return state
  }
}
