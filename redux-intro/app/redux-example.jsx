
import {createStore, compose, combineReducers} from 'redux';
// var Redux = require('redux');

console.log('starting redux example');


//must be a pure function - the Reducer
const nameReducer = (state = 'Anonymous', action) => {
  //state here is a string because the NAME is a string
  switch (action.type){

    case 'CHANGE_NAME':

      return action.name;

      break;

    default:
      return state;

  }
};

const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name //ES6 version
    // name: name
  }
};

const add_hobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};

let nextHobbyId = 1;
const hobbyReducer = (state = [], action) => {
  //state here is a string because the NAME is a string
  switch (action.type){

    case 'ADD_HOBBY':

      return [
        ...state,
        {
          id:nextHobbyId++,
          hobby: action.hobby
        }
      ];

      break;

    case 'REMOVE_HOBBY':

      return [
        ...state,
        // filter out the item that matches the id to remove it from the array
        state.filter( (hobby) => hobby.id !== action.id )
      ];

      break;

    default:
      return state;

  }
};

let nextMovieId = 1;
const movieReducer = (state = [], action) => {
  //state here is a string because the NAME is a string
  switch (action.type){

    case 'ADD_MOVIE':

      return [
        ...state,
        {
          id:nextMovieId++,
          movie: action.movie
        }
      ];

      break;

    case 'REMOVE_MOVIE':

      return [
        ...state,
        // filter out the item that matches the id to remove it from the array
        state.filter( (movie) => movie.id !== action.id )
      ];

      break;

    default:
      return state;

  }
};

const reducer = combineReducers({
  name: nameReducer,
  hobbies: hobbyReducer,
  movies: movieReducer
});

const store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


//Subscribe to changes in our store
// while this is always changing - our components can check if they need to change
const unsubscribe = store.subscribe(()=>{
  let state = store.getState();
  document.getElementById('app').innerHTML = state.name;

  console.log("Current State => ", state);

});

// unsubscribe();

//manually change state using dispatch
store.dispatch(changeName('Spencer'));

//dispatch array example
store.dispatch(add_hobby('work-out'));

store.dispatch({
  type: 'ADD_MOVIE',
  movie:'BATMAN'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 1
});

