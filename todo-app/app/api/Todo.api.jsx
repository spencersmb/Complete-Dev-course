module.exports = {
  setTodos: function(todos) {
    if(Array.isArray(todos)){
      // converts array into a string
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){

    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try{
      todos = JSON.parse(stringTodos);
    }catch(e){
      console.log("failed");
    }

    return Array.isArray(todos) ? todos : [];

  },

  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo)=>{
      // only show items that are not completed
      // OR if showCompleted === true, show both false and true items
      // bascailly return false || false, or show all return false || true
      return !todo.completed || showCompleted;
    });

    // Filter by SearchText
    filteredTodos = filteredTodos.filter((todo)=>{
      let text = todo.text.toLowerCase();
      // shorthand way
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    // comparison operator basically
    filteredTodos.sort((a, b)=>{
      // -1 return a first
      // 1 return b first
      if(!a.completed && b.completed){
        return -1;
      } else if( a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }

    });

    return filteredTodos;
  }
};