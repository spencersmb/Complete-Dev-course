// Classic Async Pattern
// take location and return the temp
// once it gets the weather, it will pass it into the callback

// if( typeof 7 === 'number') {
//
// }
function add( a, b ) {
  return a + b;
}

function checkNumType( arg ) {

  if ( typeof arg === 'number' ) {
    return true;
  } else {
    return false;
  }

}

function error( err ) {
  console.log('error', err);
}

// Challenge Area
function addPromise( a, b ) {

  return new Promise(function ( resolve, reject ) {

    if ( checkNumType(a) && checkNumType(b) ) {
      resolve(add(a, b));
    } else {
      reject('Both are not numbers');
    }

  });

}

addPromise(6, 2).then(function ( number ) {
  console.log('success', number);
}, error);

addPromise(6, 'two').then(function ( number ) {
  console.log('success', number);
}, error);
// call a few times with 2 nums, and other is to make it fail
// node example-promise.js

// function classicCallback( location, callback ) {
//   //everything went well, call callback with undefined as err and num as temp
//   callback(undefined, 78);
//
//   //if error pass in string
//   callback('City not found');
// }
//
// classicCallback('Philadelphia', function (err, temp) {
//   if(err){
//     console.log('error', err);
//   }else{
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise( location ) {
//   return new Promise(function ( resolve, reject ) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Philadelphia').then(function ( successTemp ) {
//   console.log('success', successTemp);
// }, function ( err ) {
//   console.log('error', err);
// });