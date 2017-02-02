
import {createStore, compose, combineReducers} from 'redux';
import * as actionsLoader from './actions/index';
import {config} from './store/config.store'

const store = config();
const actions = actionsLoader;

console.log('starting redux example');



//Subscribe to changes in our store
// while this is always changing - our components can check if they need to change
const unsubscribe = store.subscribe( () => {
  
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
store.dispatch(actions.changeName('Spencer'));

//dispatch array example
store.dispatch(actions.add_hobby('work-out'));

store.dispatch(actions.add_movie('BATMAN'));

store.dispatch(actions.remove_hobby(1));

//special magic: sec 10 lec 115
store.dispatch(actions.fetch_location());

