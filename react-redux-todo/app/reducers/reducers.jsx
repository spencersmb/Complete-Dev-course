const uuid = require('node-uuid');
const moment = require('moment');

export const searchTextReducer = (state = '', action) => {
  
  switch(action.type){
    
    case 'SET_SEARCH_TEXT':
      
      return action.searchText;
      
      break;
    
    default:
      return state;
    
  }
  
};

export const showCompletedReducer = (state = false, action) => {

  switch(action.type){

    case 'TOGGLE_SHOW_COMPLETED':

      return !state;

      break;

    default:
      return state;

  }

};

export const todosReducer = (state = [], action) => {

  switch(action.type){

    case 'ADD_TODO':

      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];

      break;
    
    case 'TOGGLE_TODO':

      return state.map( (todo) => {

        if(todo.id === action.id){

          //create temp variable to store since we cannot modify the original item
          let nextCompleted = !todo.completed;

          //then return a new object passing in all the contents of the todo item while over-writting the new data
          return {
            ...todo,
            completed: nextCompleted,
            completedAt : nextCompleted ? moment().unix() : undefined
          };

        }else {
          return todo;
        }


      });
      
      break;

    default:
      return state;

  }

};