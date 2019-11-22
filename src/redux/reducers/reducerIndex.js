import { combineReducers } from "redux";

const newsList = (state = '', action) => {
  switch (action.type) {
    case 'SET_NEWS':
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  newsList
});

export default rootReducer;