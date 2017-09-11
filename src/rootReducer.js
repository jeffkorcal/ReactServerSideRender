import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

const apiData = (state = {}, action) => {
  switch (action.type) {
    case ADD_API_DATA:
      return {
        ...state,
        [action.payload.imdbID]: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
