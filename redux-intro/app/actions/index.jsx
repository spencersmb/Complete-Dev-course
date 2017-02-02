//Actions
import axios from 'axios';


// Name Action
// -----------------------
export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name //ES6 version
    // name: name
  }
};


// Hobby Reducer and Action
// -----------------------
export const add_hobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};
export const remove_hobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};


// Movie Action
// -----------------------
export const add_movie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    movie
  }
};


// Map Action
// -----------------------
export const start_location_fetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
};


//special way to handle functions that need access to dispatch and get state because its async
export const fetch_location = () => {

  return (dispatch, getState) => {
    // init with loading icon
    dispatch(start_location_fetch());

    //use axios library - to fetch data
    axios.get("http://ipinfo.io").then( (response) => {

      let loc = response.data.loc;
      let baseUrl = 'http://maps.google.com?q=';

      setTimeout(()=>{
        dispatch(complete_location_fetch(baseUrl + loc));
      }, 2000);

    } )
  }
};

export const complete_location_fetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};
