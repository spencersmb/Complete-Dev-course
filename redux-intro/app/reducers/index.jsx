//Reducers
export const nameReducer = (state = 'Anonymous', action) => {
  //state here is a string because the NAME is a string
  switch (action.type){

    case 'CHANGE_NAME':

      return action.name;

      break;

    default:
      return state;

  }
};


let nextHobbyId = 1;
export const hobbyReducer = (state = [], action) => {
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

let defaultMap = {
  isFetching: false,
  url: undefined
};
let nextMovieId = 1;
export const movieReducer = (state = [], action) => {
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

export const mapReducer = (state = defaultMap, action) => {

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