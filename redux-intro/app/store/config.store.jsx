//store config
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { nameReducer, hobbyReducer, movieReducer, mapReducer } from './../reducers/index';


export const config = () => {
  
  const reducer = combineReducers({
    name: nameReducer,
    hobbies: hobbyReducer,
    movies: movieReducer,
    map: mapReducer
  });

  const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
};

