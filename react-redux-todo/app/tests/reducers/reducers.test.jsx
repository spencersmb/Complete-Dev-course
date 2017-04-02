import expect from 'expect';
import * as reducers from 'reducers';
import df from 'deep-freeze-strict';

const uuid = require('node-uuid');
const moment = require('moment');

describe( 'Reducers', () => {

  describe('searchTextReducer', () => {

    it('Should set search text', () => {

      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Dog'
      };

      //empty string is a dummy 'current state'
      const response = reducers.searchTextReducer(df(''), df(action));

      expect(response).toEqual(action.searchText);

    });

  });

  describe('showCompletedReducer', () => {

    it('Should flip the completed boolean', () => {

      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
        showCompleted: true
      };

      //empty string is a dummy 'current state'
      const response = reducers.showCompletedReducer(df(false), df(action));

      expect(response).toEqual(action.showCompleted);

    });

  });

  describe('todosReducer', () => {

    it('Should add new todo', () => {

      const action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };

      //empty string is a dummy 'current state'
      const response = reducers.todosReducer(df([]), df(action));

      expect(response.length).toEqual(1);
      expect(response[0].text).toEqual(action.text);

    });

    it('Should add all todos', () => {

      const todos = [
        {
          id: 111,
          text: 'talk to parents',
          completed: false,
          completedAt: undefined,
          createdAt: 500
        },
        {
          id: 123,
          text: 'Add firebase',
          completed: false,
          completedAt: undefined,
          createdAt: 500
        }
      ];
      const action = {
        type: 'ADD_TODOS',
        todos
      };
      const initialState = [
        {
          id: 321,
          text: 'First start',
          completed: false,
          completedAt: undefined,
          createdAt: 500
        }
      ];

      //empty string is a dummy 'current state'
      const response = reducers.todosReducer(df(initialState), df(action));

      expect(response.length).toEqual(3);

    });

    it('Should toggle todo', () => {

      const action = {
        type: 'TOGGLE_TODO',
        id: 1
      };

      const sampleArray = [
        {
          id: 1,
          text: 'Walk the dog',
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];

      //empty string is a dummy 'current state'
      const response = reducers.todosReducer(df(sampleArray), df(action));

      expect(response[0].completed).toEqual(true);

    });

  });

});