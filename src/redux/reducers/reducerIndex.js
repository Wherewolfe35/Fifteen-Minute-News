import { combineReducers } from "redux";

const newsList = (state = '', action) => {
  switch (action.ype) {
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