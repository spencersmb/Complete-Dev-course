import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { searchTextReducer, showCompletedReducer, todosReducer } from './../reducers/reducers';


export const config = () => {

  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  const store = createStore(reducer, compose(
    // applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};