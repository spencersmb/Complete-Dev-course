import axios from 'axios';
import {createStore, compose, combineReducers} from 'redux';
// var Redux = require('redux');

console.log('starting redux example');


//must be a pure function - the Reducer

// Name Reducer and Action
// -----------------------
const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name //ES6 version
    // name: name
  }
};
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


// Hobby Reducer and Action
// -----------------------
let nextHobbyId = 1;
const add_hobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};
const remove_hobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};
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
        // filter out the item that matches the id to remove it from the array
        state.filter( (hobby) => hobby.id !== action.id )
      ];

      break;

    default:
      return state;

  }
};


// Movie Reducer and Action
// -----------------------
let nextMovieId = 1;
const add_movie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    movie
  }
};
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

// Map Reducer and Action
// -----------------------
let nextMapId = 1;
let defaultMap = {
  isFetching: false,
  url: undefined
};

const start_location_fetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};

const fetch_location = () => {

  // init with loading icon
  store.dispatch(start_location_fetch());

  //use axios library - to fetch data
  axios.get("http://ipinfo.io").then( (response) => {

    let loc = response.data.loc;
    let baseUrl = 'http://maps.google.com?q=';

    setTimeout(()=>{
      store.dispatch(complete_location_fetch(baseUrl + loc));
    }, 2000);

  } )
};

const complete_location_fetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};

const mapReducer = (state = defaultMap, action) => {

  switch (action.type){

    case 'START_LOCATION_FETCH':

      return {
          isFetching: true,
          url: undefined // this clears out any past URL
      };

      break;

    //FIRES ONCE WE HAVE THE DATA FROM THE API
    case 'COMPLETE_LOCATION_FETCH':

      return {
          isFetching: false,
          url: action.url
        };

      break;

    default:
      return state;

  }
};


const reducer = combineReducers({
  name: nameReducer,
  hobbies: hobbyReducer,
  movies: movieReducer,
  map: mapReducer
});

const store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


//Subscribe to changes in our store
// while this is always changing - our components can check if they need to change
const unsubscribe = store.subscribe(()=>{
  let state = store.getState();
  //document.getElementById('app').innerHTML = state.name;


  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading Map request';
  }else if( state.map.url ){
    document.getElementById('app').innerHTML = '<a target="_blank" href="'+ state.map.url +'">View Location</a>';
  }

  console.log("Current State => ", state);

});

// unsubscribe();

//manually change state using dispatch
store.dispatch(changeName('Spencer'));

//dispatch array example
store.dispatch(add_hobby('work-out'));

store.dispatch(add_movie('BATMAN'));

store.dispatch(remove_hobby(1));

fetch_location();

