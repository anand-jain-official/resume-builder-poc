import { SELECT_THEME } from "../types/Home";

const initState = {
  theme : "green"
}

const HomeReducer = (state = initState,action) =>{
	switch(action.type){
    case SELECT_THEME:
      return {
        ...state,
        theme : action.payload
      }
    default:
      return state;
  }
}

export default HomeReducer;