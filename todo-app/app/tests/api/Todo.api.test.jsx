let expect = require('expect');

let TodoApi = require('TodoApi');

describe('TodoApi', () => {

  // mocha built in handler
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it("Should Exist", () => {
    expect(TodoApi).toExist();
  });
  
  describe('Set Todos', () => {

    it('Should accept a valid array and return us our data if valid', () => {
      let data = [{
        id: 1,
        text: 'Test data',
        completed: false
      }];
      
      // Call set todos with Valid array
      let TodoArray = TodoApi.setTodos(data);

      let localStorageData = JSON.parse(localStorage.getItem('todos'));

      expect(localStorageData).toEqual(data);
    });
    
    it('Should fail when taking an invalid array', () => {
      let data = {
        id: 1,
        text: 'Test data',
        completed: false
      };

      // Call set todos with inValid array
      let TodoArray = TodoApi.setTodos(data);

      expect(TodoArray).toBe(undefined);
      expect(localStorage.getItem('todos')).toBe(null);

    });
    
  });

  describe('Get Todos', () => {

    it('Should return an empty array of data', () => {
      let todos = TodoApi.getTodos();

      expect(todos).toEqual([]);
    });

    it('Should return our example array of data', () => {
      let data = [{
        id: 1,
        text: 'Test data',
        completed: false
      }];

      // Call set todos with Valid array
      localStorage.setItem('todos', JSON.stringify(data));

      let todos = TodoApi.getTodos();

      expect(todos).toEqual(data);
    });

  });

  describe('Filter Todos', () => {
    let data = [
      {
        id: 1,
        text: 'Test data',
        completed: false
      },
      {
        id: 2,
        text: 'Moe the grass',
        completed: true
      },
      {
        id: 3,
        text: 'Clean Grill',
        completed: false
      }
    ];
    it("Should show all todos when Showcompleted is checked", ()=>{

      let newData = TodoApi.filterTodos(data, true, '');

      expect(newData.length).toBe(3);
    });

    it("Should show only todos not completed", ()=>{

      let newData = TodoApi.filterTodos(data, false, '');

      expect(newData.length).toBe(2);
    });

    it("Should sort todos", () => {
      let newData = TodoApi.filterTodos(data, true, '');

      console.log(newData);
      expect(newData[2].id).toBe(2);
    });

    it("Should filter by Search Text", () => {
      let newData = TodoApi.filterTodos(data, true, 'grass');

      expect(newData.length).toBe(1);
    });

    it("Should return all todos when Search Text is empty ", () => {
      let newData = TodoApi.filterTodos(data, true, '');

      expect(newData.length).toBe(3);
    });


  });

});