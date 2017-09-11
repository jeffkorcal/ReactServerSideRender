import axios from 'axios';

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export const ADD_API_DATA = 'ADD_API_DATA';
export function addAPIData(apiData) {
  return {
    type: ADD_API_DATA,
    payload: apiData
  };
}

export function getAPIDetails(imdbID) {
  return dispatch => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        console.log(response.data);
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.error(error);
      });
  };
}
