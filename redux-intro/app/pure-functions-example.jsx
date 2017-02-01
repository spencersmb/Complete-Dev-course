import redux from 'redux';
const Redux = redux;

console.log('starting redux example');

//PURE FUNCTION :
// Same output with same input
// No side-effects
// Avoid Async

function add( a, b ) {
  return a + b;
}

//Not Pure
let a = 3;
function addAgain( b ) {
  return a + b;
}

//Lastly cannot update the values passed inside the function
//This means we cant change a after its sent into the function
function changeProp( obj ) {

  //return a new object instead of altering the one passed in
  return {
    ...obj,
    name: 'Jen'
  };

  //not the right way to alter data
  // obj.name = 'Jen';
  // return obj;
}

let res = changeProp({
  name: 'spencer',
  age: '35'
});

console.log(res);

