var moment = require('moment');

//default string of current date
console.log(moment().format());

var now = new moment();

console.log("Current Time is", now.unix()); //prints 1467518447

var timeStamp = 1467518447;
var currentMoment = moment.unix(timeStamp);

console.log("Formatted Date", currentMoment.format("MMMM Do, YYYY @ h:mm A"));