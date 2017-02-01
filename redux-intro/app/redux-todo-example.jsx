import {createStore, compose} from 'redux';

console.log("Start Todo Redux Example");

const stateDefault = {
  searchText: '',
  showCompleted:
    false, todos: []
};

//The reducer takes the current state and the action to combine them and return a new state
let reducer = (state = stateDefault, action) => {

  // console.log("New Action ", action);
  switch (action.type){

    case 'CHANGE_SEARCH_TEXT':

      return {
        ...state,
        searchText: action.searchText
      };
      break;

    default:
      return state;

  }

};

const store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscribe to changes in our store
// while this is always changing - our components can check if they need to change
const unsubscribe = store.subscribe(()=>{
  let state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
  console.log("Current State => ", state);

});


//update state with ACTIONS
const action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Spencer'
};

//manually change state using dispatch
store.dispatch(action);

// unsubscribe();

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Bigum'
});