import {createStore, compose} from 'redux';

console.log("Start Todo Redux Example");

const stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

let nextTodoId = 1;

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

    case 'ADD_TODO':

      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId++, //set unique ID on each item
            todo: action.todo
          }
        ]
      };
      break;

    case 'REMOVE_TODO':

      return {
        ...state,
        // filter out the item that matches the id to remove it from the array
        todos: state.todos.filter( (todo) => todo.id !== action.id )

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

//dispatch array example
store.dispatch({
  type: 'ADD_TODO',
  todo:'Work Out'
});

store.dispatch({
  type: 'ADD_TODO',
  todo:'Browser Test Website'
});

store.dispatch({
  type: 'REMOVE_TODO',
  id: 2
});