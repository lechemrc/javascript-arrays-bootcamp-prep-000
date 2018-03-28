var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = [1];
var element = 'foo';
 
function addElementToBeginningOfArray(array, element){
 var addElement = [element];
 addElement = addElement.concat(array);
 return (addElement);
}
 
function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
 return (array);
}

function addElementToEndOfArray(array, element){
  var addElementEnd = [element];
  addElementEnd = array.concat(addElementEnd);
  return (addElementEnd);
}
 
function destructivelyAddElementToEndOfArray(array, element){
 array.push(element);
 return (array);
}

function accessElementInArray(array, index){
  console.log(array[2]);
}

function removeElementFromBeginningOfArray(array, element) {
  array.slice(-2);
  return (array);
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift();
  array;
  return (array);
}

function removeElementFromEndOfArray(array, element) {
  var sliceArray = array.slice(2, 1);
  return (sliceArray);
}

function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop();
  return (array);
}
