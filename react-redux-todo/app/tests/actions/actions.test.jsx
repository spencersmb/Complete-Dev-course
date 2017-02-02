import expect from 'expect';
import * as actions from 'actions';

describe( 'Actions', () => {
  
  it('Should generate search text action', () => {

    //Action we expect to get back
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    const response = actions.setSearchText( action.searchText );

    // then see if they are equal

    expect(response).toEqual(action);

  });

  it('Should generate add todo action', () => {

    //Action we expect to get back
    const action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };

    const response = actions.addTodo( action.text );

    // then see if they are equal
    expect(response).toEqual(action);

  });

  it('Should generate toggle show completed action', () => {

    //Action we expect to get back
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    const response = actions.toggleShowCompleted();

    // then see if they are equal
    expect(response).toEqual(action);

  });

  it('Should generate toggle todo action', () => {

    //Action we expect to get back
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    const response = actions.toggleTodo(action.id);

    // then see if they are equal
    expect(response).toEqual(action);

  });
  
});